type TestCase<TInput extends unknown[], TOutput> = {
    input: TInput;
    expected: TOutput;
    description?: string;
};

type ProblemDefinition<TInput extends unknown[], TOutput> = {
    id: string;
    functionName: string;
    testCases: TestCase<TInput, TOutput>[];
    timeout?: number;
};

type TestResult<TInput extends unknown[], TOutput> = {
    input: TInput;
    expected: TOutput;
    actual: TOutput | undefined;
    passed: boolean;
    error?: string;
    inputString?: string;
};

export class CodeCheckerService<TInput extends unknown[], TOutput> {
    private static readonly DEFAULT_TIMEOUT = 2000;
    private static readonly SANDBOX_IFRAME_ID = 'code-checker-sandbox';

    constructor(private problem: ProblemDefinition<TInput, TOutput>) { }

    public async checkUserCode(userCode: string): Promise<{
        passed: boolean;
        results: TestResult<TInput, TOutput>[];
    }> {
        this.validateCodeSafety(userCode);
        const sandbox = this.createSandboxIframe();

        try {
            const results = await this.executeInSandbox(
                sandbox,
                userCode,
                this.problem.functionName,
                this.problem.testCases,
                this.problem.timeout || CodeCheckerService.DEFAULT_TIMEOUT
            );

            return {
                passed: results.every(r => r.passed),
                results,
            };
        } finally {
            sandbox.remove();
        }
    }

    private validateCodeSafety(code: string): void {
        const forbiddenPatterns = [
            /eval\s*\(/,
            /new\s+Function\s*\(/,
            /setTimeout\s*\([^)]*\)/,
            /setInterval\s*\([^)]*\)/,
            /fetch\s*\(/,
            /XMLHttpRequest/,
            /\.innerHTML\s*=/,
            /document\.(write|writeln)/,
            /window\.(open|location)/,
            /importScripts/,
            /require\s*\(/,
            /process\./,
        ];

        for (const pattern of forbiddenPatterns) {
            if (pattern.test(code)) {
                throw new Error(
                    `Код содержит потенциально опасные конструкции: ${pattern.source}`
                );
            }
        }
    }

    private createSandboxIframe(): HTMLIFrameElement {
        let iframe = document.getElementById(
            CodeCheckerService.SANDBOX_IFRAME_ID
        ) as HTMLIFrameElement;

        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = CodeCheckerService.SANDBOX_IFRAME_ID;
            iframe.style.display = 'none';
            iframe.sandbox.add('allow-scripts');
            document.body.appendChild(iframe);
        }

        return iframe;
    }

    private async executeInSandbox(
        iframe: HTMLIFrameElement,
        userCode: string,
        functionName: string,
        testCases: TestCase<TInput, TOutput>[],
        timeout: number
    ): Promise<TestResult<TInput, TOutput>[]> {
        return new Promise((resolve) => {
            const timeoutId = setTimeout(() => {
                iframe.contentWindow?.postMessage({ type: 'timeout' }, '*');
            }, timeout);

            const messageHandler = (event: MessageEvent) => {
                if (event.source !== iframe.contentWindow) return;

                if (event.data.type === 'result') {
                    clearTimeout(timeoutId);
                    window.removeEventListener('message', messageHandler);
                    resolve(event.data.results);
                }
            };

            window.addEventListener('message', messageHandler);

            const testScript = this.generateTestScript(userCode, functionName, testCases);

            iframe.srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
          <script>
            ${testScript}
          </script>
        </head>
        <body></body>
        </html>
      `;
        });
    }

    private generateTestScript(
        userCode: string,
        functionName: string,
        testCases: TestCase<TInput, TOutput>[]
    ): string {
        const testCasesScript = testCases
            .map((testCase) => {
                const inputJson = JSON.stringify(testCase.input);
                const expectedJson = JSON.stringify(testCase.expected);
                const inputArgs = testCase.input.map((arg) => JSON.stringify(arg)).join(', ');

                return `
        try {
          const result = ${functionName}(...${inputJson});
          const passed = deepEqual(result, ${expectedJson});
          testResults.push({
            input: ${inputJson},
            expected: ${expectedJson},
            actual: result,
            passed: passed,
            inputString: \`${functionName}(${inputArgs})\`
          });
        } catch (error) {
          testResults.push({
            input: ${inputJson},
            expected: ${expectedJson},
            actual: undefined,
            passed: false,
            error: error instanceof Error ? error.message : String(error),
            inputString: \`${functionName}(${inputArgs})\`
          });
        }
      `;
            })
            .join('\n');

        return `
    const testResults = [];
    const deepEqual = (a, b) => {
      try {
        return JSON.stringify(a) === JSON.stringify(b);
      } catch {
        return false;
      }
    };
    
    try {
      ${userCode}
      
      if (typeof ${functionName} !== 'function') {
        window.parent.postMessage({
          type: 'result',
          results: [{
            error: 'Функция ${functionName} не найдена',
            passed: false
          }]
        }, '*');
      } else {
        ${testCasesScript}
        window.parent.postMessage({
          type: 'result',
          results: testResults
        }, '*');
      }
    } catch (error) {
      window.parent.postMessage({
        type: 'result',
        results: [{
          error: 'Ошибка выполнения: ' + (error instanceof Error ? error.message : String(error)),
          passed: false
        }]
      }, '*');
    }
  `;
    }
}
