import { FC, memo, useCallback, useState } from 'react';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';

import './CodeTaskPage.scss';
import { Button } from '@mui/material';
import { generateColorInPalette } from '../../utils/colorGenerator';
import { CodeCheckerService, TestCase } from '../../services/codeChecker.service';
import { useAppContext } from '../../components/AppContext/AppContext';
import { useParams } from 'react-router-dom';

const CodeTaskPageComponent: FC = () => {
    const [editorValue, setEditorValue] = useState('');
    const buttonColor = generateColorInPalette(170, [70, 90], [50, 70]);
    const context = useAppContext();
    const { course, taskId } = useParams();

    const task = context?.data.courses
        .filter(item => {
            if (course) {
                return item.title === course.toUpperCase();
            }
            return item;
        })
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks)
        .find(item => item._id === taskId);

    const handleSendButtonClick = useCallback(() => {
        const tests = task?.tests ?? [];
        const problem = {
            id: task?._id ?? '',
            functionName: 'getEvenNumbers',
            testCases: [...tests] as TestCase<unknown[], unknown>[],
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
    }, [editorValue, task]);

    return (
        <div className='code-task-page'>
            <section className='code-task'>
                <h1 className='code-task-title'>
                    {task?.title}
                </h1>
                <hr />
                <p className='code-task-text'>
                    {task?.text}
                </p>
            </section>
            <section className='code-task-editor'>
                <CodeEditor
                    onValueChange={setEditorValue}
                    placeholder={task?.placeholderCode?.trim() ?? '// место для вашего кода'}
                />
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