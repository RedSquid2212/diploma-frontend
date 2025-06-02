import { Button, Card, CardContent, CardHeader, CircularProgress } from '@mui/material';
import { FC, memo } from 'react';

import './ProgressCard.scss';
import { Link } from 'react-router-dom';

type Props = {
    readonly courseColor: string;
};

const ProgressCardComponent: FC<Props> = ({ courseColor }) => {
    return (
        <Card
            className='progressCard'
            sx={{ backgroundColor: '#1E1E1E', color: '#E0E0E0', fontFamily: 'Manrope, system-ui' }}
        >
            <CardHeader
                title='Ваш прогресс'
            />
            <CardContent>
                <div className='progressStat'>
                    <span>
                        Выполнено 60% заданий
                    </span>
                    <CircularProgress
                        variant="determinate"
                        value={60}
                        sx={{color: courseColor}}
                    />
                </div>
                <Link to={'/'}>
                    <Button
                        type="button"
                        variant="contained"
                        className='practiceButton'
                        sx={{backgroundColor: courseColor}}
                    >
                        Перейти к практике
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export const ProgressCard = memo(ProgressCardComponent);
