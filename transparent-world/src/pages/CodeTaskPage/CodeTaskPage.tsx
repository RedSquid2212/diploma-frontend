import { FC, memo, useCallback, useEffect, useState } from 'react';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';

import './CodeTaskPage.scss';
import { Task } from '../../models/task';
import { Button } from '@mui/material';
import { generateColorInPalette } from '../../utils/colorGenerator';
import { CodeCheckerService } from '../../services/codeChecker.service';
import { client } from '../../services/client.service';

type Props = {
    readonly task: Task;
};

const CodeTaskPageComponent: FC<Props> = ({ task }) => {
    const [editorValue, setEditorValue] = useState('');
    const buttonColor = generateColorInPalette(170, [70, 90], [50, 70]);

    useEffect(() => {
        const getLeaderboard = async () => {
            await client.updateThemeProgress({
                userId: '684083967bb40ec1a6381a4d',
                courseId: '684083967bb40ec1a6381a4f',
                themeId: '684083967bb40ec1a6381a81',
                xp: 10,
            });
        };
        getLeaderboard();
    }, []);

    const handleSendButtonClick = useCallback(() => {
        const problem = {
            id: 'sum-two-numbers',
            functionName: 'sum',
            testCases: [
                { input: [1, 2], expected: 3 },
                { input: [-1, 1], expected: 0 },
                { input: [0, 0], expected: 0 },
            ],
            timeout: 3000,
        };

        const checker = new CodeCheckerService(problem);

        checker.checkUserCode(editorValue)
            .then(result => {
                console.log('Все тесты пройдены:', result.passed);
                console.log('Детали:', result.results);
            })
            .catch(error => {
                console.error('Ошибка проверки:', error.message);
            });
    }, [editorValue]);

    return (
        <div className='code-task-page'>
            <section className='code-task'>
                <h1 className='code-task-title'>
                    {task.title}
                </h1>
                <hr />
                <p className='code-task-text'>
                    {task.text}
                </p>
            </section>
            <section className='code-task-editor'>
                <CodeEditor onValueChange={setEditorValue} />
                <Button
                    variant="contained"
                    className='send-button'
                    sx={{ backgroundColor: buttonColor, color: '#1E1E1E' }}
                    onClick={handleSendButtonClick}
                >
                    Отправить на проверку
                </Button>
            </section>
        </div>
    )
};

export const CodeTaskPage = memo(CodeTaskPageComponent);