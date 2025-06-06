import { Card, CardContent, CardHeader, CircularProgress } from '@mui/material';
import { FC, memo } from 'react';

import './ProgressCard.scss';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext/AppContext';
import { CourseButton } from '../CourseButton/CourseButton';

type Props = {
    readonly courseColor: string;
    readonly buttonLabel: string;
    readonly navigateTo: string;
};

const ProgressCardComponent: FC<Props> = ({ courseColor, buttonLabel, navigateTo }) => {
    const { course } = useParams();
    const context = useAppContext();
    const progress = context?.data.courses
        .find(item => item.title === course?.toUpperCase())?.progress ?? 0;

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
                        Выполнено { Math.round(progress) }% заданий
                    </span>
                    <CircularProgress
                        variant="determinate"
                        value={Math.round(progress)}
                        sx={{color: courseColor}}
                    />
                </div>
                <CourseButton
                    courseColor={courseColor}
                    navigateTo={navigateTo}
                    label={buttonLabel}
                />
            </CardContent>
        </Card>
    );
};

export const ProgressCard = memo(ProgressCardComponent);
