import { FC, memo, useCallback, useState } from 'react';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';

import './CodeTaskPage.scss';
import { Button } from '@mui/material';
import { generateColorInPalette } from '../../utils/colorGenerator';
import { CodeCheckerService, TestCase } from '../../services/codeChecker.service';
import { useAppContext } from '../../components/AppContext/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { client } from '../../services/client.service';
import { Header } from '../../components/Header/Header';

const CodeTaskPageComponent: FC = () => {
    const [editorValue, setEditorValue] = useState('');
    const buttonColor = generateColorInPalette(170, [70, 90], [50, 70]);
    const context = useAppContext();
    const { course, taskId } = useParams();
    const [isRandomMode, setIsRandomMode] = useState(false);
    const navigate = useNavigate();

    const tasks = context?.data.courses
        .filter(item => {
            if (course) {
                setIsRandomMode(true);
                return item.title === course.toUpperCase();
            }
            return item;
        })
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks);
    const task = tasks?.find(item => item._id === taskId);
    const randomIndex = Math.floor(Math.random() * (tasks?.length ?? 0));
    const theme = context?.data.courses.flatMap(item => item.themes).find(item => item._id === task?.themeId);
    const contextCourse = context?.data.courses.find(item => item._id === theme?.courseId);
    const user = context?.data.user;

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
            .then(async () => {
                const xp = isRandomMode ? 100 : (task?.xp ?? 50);
                await client.updateThemeProgress({
                    userId: user?._id ?? '',
                    courseId: contextCourse?._id ?? '',
                    themeId: theme?._id ?? '',
                    taskId: task?._id ?? '',
                    xp,
                });
            })
            .catch(error => {
                console.error('Ошибка проверки:', error.message);
                if (isRandomMode) {
                    navigate(`/task/${(tasks ?? [])[randomIndex]?._id}`);
                }
            });
    }, [editorValue, task, isRandomMode, contextCourse, user, theme, navigate, randomIndex, tasks]);

    return (
        <>
            <Header />
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
        </>
    )
};

export const CodeTaskPage = memo(CodeTaskPageComponent);