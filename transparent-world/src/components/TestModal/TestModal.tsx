import { Alert, Button, Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC, memo, useState } from 'react';

import './TestModal.scss';
import { Task } from '../../models/task';
import { client } from '../../services/client.service';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext/AppContext';

type Props = {
    readonly open: boolean;
    readonly onOpen: (isOpen: boolean) => void;
    readonly task: Task | null;
    readonly themeId: string | null;
    readonly isGameMode: boolean;
    readonly onGameOver?: (isGameOver: boolean) => void;
    readonly onAnswerSuccess?: (isAnswerSuccess: boolean) => void;
    readonly xp: number;
};

const TestModalComponent: FC<Props> = ({ open, onOpen, task, themeId, isGameMode, xp, onGameOver, onAnswerSuccess }) => {
    const [value, setValue] = useState('');
    const { course } = useParams();
    const context = useAppContext();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const contextCourse = context?.data.courses.find(item => item.title === course?.toUpperCase());
    const user = context?.data.user;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setError('');
    };

    const handleClose = () => {
        setError('');
        setSuccess('');
        onGameOver?.(true);
        onOpen(false);
    };

    const handleAnswer = async () => {
        if (value === task?.answer) {
            setSuccess('Правильно!');
            if (!task.isSolved && !isGameMode) {
                await client.updateThemeProgress({
                    userId: user?._id ?? '',
                    courseId: contextCourse?._id ?? '',
                    themeId: themeId ?? '',
                    taskId: task._id ?? '',
                    xp,
                });
            } else if (task.isSolved && !isGameMode) {
                await client.updateThemeProgress({
                    userId: user?._id ?? '',
                    courseId: contextCourse?._id ?? '',
                    themeId: themeId ?? '',
                    taskId: task._id ?? '',
                    xp: 0
                });
            } else if (isGameMode) {
                onAnswerSuccess?.(true);
                setError('');
                setSuccess('');
                onOpen(false);
            }
        } else {
            setError('Неправильный ответ');
            if (isGameMode) {
                await client.updateGameRecord({
                    userId: user?._id ?? '',
                    newGameXp: xp,
                });
                onAnswerSuccess?.(false);
                onGameOver?.(true);
                handleClose();
            }
        }
    };

    return (
        <Dialog open={open} className='testDialog' onClose={handleClose}>
            <DialogTitle>
                {task?.title}
            </DialogTitle>
            <p>{task?.text}</p>
            <FormControl>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {
                        task?.variants?.map((variant, index) => (
                            <FormControlLabel
                                value={variant}
                                control={<Radio />}
                                label={variant}
                                key={index}
                            />
                        ))
                    }
                </RadioGroup>
                {
                    success && <Alert security="success" variant="outlined">{success}</Alert>
                }
                {
                    error && <Alert
                        severity="error"
                        variant="outlined"
                        onClose={() => setError('')}
                    >
                        {error}
                    </Alert>
                }
                <Button type="button" variant="contained" onClick={handleAnswer}>
                    Отправить
                </Button>
                {
                    isGameMode &&
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            onGameOver?.(true);
                            onOpen(false);
                        }}
                        className='gameOver'
                    >
                        Сдаюсь
                    </Button>
                }
            </FormControl>
        </Dialog>
    )
};

export const TestModal = memo(TestModalComponent);
