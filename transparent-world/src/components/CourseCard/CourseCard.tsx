import { Avatar, Button, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { FC, memo } from 'react';

import './CourseCard.scss';

type Props = {
    readonly title: string;
    readonly courseName: 'JS' | 'CSS' | 'HTML';
    readonly courseColor: string;
    readonly avatarSrc: string;
    readonly progress: number;
    readonly themesCount: string;
    readonly hoursCount: string;
};

const CourseCardComponent: FC<Props> = ({
    title,
    courseName,
    courseColor,
    progress,
    avatarSrc,
    themesCount,
    hoursCount,
}) => {
    return (
        <Card
            className='courseCard'
            sx={{backgroundColor: '#1E1E1E', color: '#E0E0E0', fontFamily: 'Manrope, system-ui'}}
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt={courseName}
                        src={avatarSrc}
                        sx={{ width: 56, height: 56 }}
                        variant="rounded"
                    />
                }
                title={title}
                className='courseHeader'
            />
            <CardContent className='courseCardContent'>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    className={courseName.toLowerCase()}
                />
                <p className='courseStatistic'>
                    <span>{ themesCount }</span>
                    <span>{ hoursCount }</span>
                </p>
                <Button
                    type="button"
                    variant="outlined"
                    className='courseButton'
                    sx={{backgroundColor: courseColor, color: '#1E1E1E'}}
                >
                    Продолжить обучение
                </Button>
            </CardContent>
        </Card>
    )
};

export const CourseCard = memo(CourseCardComponent);
