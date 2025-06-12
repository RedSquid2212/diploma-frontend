import { Editor } from '@monaco-editor/react';
import { FC, memo, useCallback } from 'react';
import hljs from 'highlight.js';

import './CodeEditor.scss';

type Props = {
    readonly onValueChange: (value: string) => void;
    readonly placeholder: string;
};

const CodeEditorComponent: FC<Props> = ({ onValueChange, placeholder }) => {
    const handleValueChange = useCallback((value: string | undefined) => {
        onValueChange(value ?? '');
    }, [onValueChange]);

    const detectLanguage = (code: string) => {
        const result = hljs.highlightAuto(code, ['javascript', 'html', 'css']);
        return result.language || 'plaintext';
    };

    return (
        <div className='editor-container'>
            <Editor
                height='85vh'
                theme='vs-dark'
                defaultLanguage={detectLanguage(placeholder)}
                defaultValue={placeholder}
                onChange={handleValueChange}
            />
        </div>
    );
};

export const CodeEditor = memo(CodeEditorComponent);