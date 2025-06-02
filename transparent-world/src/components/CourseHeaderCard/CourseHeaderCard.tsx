import { Button, Card, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import './CourseHeaderCard.scss';

type Props = {
    readonly courseName: string;
};

const CourseHeaderCardComponent: FC<Props> = ({ courseName }) => {
    return (
        <>
            <Card
                sx={{ position: 'relative' }}
            >
                <div className='veil'></div>
                <div className='courseInfo'>
                    <Link to={'/'}>
                        <Button
                            type="button"
                            startIcon={<ArrowBackIcon />}
                            className='backButton'
                        >
                            Вернуться к курсам
                        </Button>
                    </Link>
                    <h1 className='courseTitle'>
                        Основы { courseName }
                    </h1>
                    <div className='courseStat'>
                        <span>
                            8 тем
                        </span>
                        <span>
                            12 часов
                        </span>
                    </div>
                </div>
                <CardMedia
                    component='img'
                    alt='code background'
                    image='/src/assets/code-background.jpg'
                    height={200}
                />
            </Card>
        </>
    );
};

export const CourseHeaderCard = memo(CourseHeaderCardComponent);
