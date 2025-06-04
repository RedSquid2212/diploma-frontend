import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import { FC, memo } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

import './ProfileCard.scss';
import { ProfileProgress } from '../ProfileProgress/ProfileProgress';
import { LevelProgress } from '../LevelProgress/LevelProgress';

const ProfileCardComponent: FC = () => {
    return (
        <Card
            sx={{
                backgroundColor: '#1E1E1E',
                color: '#E0E0E0',
                fontFamily: 'Manrope, system-ui',
                height: 'fit-content',
            }}
        >
            <CardHeader
                avatar={
                    <UserAvatar username='Lina Shmantsar' />
                }
            />
            <CardContent>
                <div className='statContainer'>
                    <span>100 XP</span>
                    <span>0 game XP</span>
                    <span>1 уровень</span>
                </div>
                <LevelProgress />
                <hr />
                <div className='userProgressContaner'>
                    <h2 className='progressHeader'>
                        Прогресс по курсам
                    </h2>
                    <div className='userCoursesContainer'>
                        <div className='courseProgress'>
                            <Avatar alt='JS' src='/src/assets/js.png' variant="rounded" />
                            <span className='courseTitle'>
                                Основы JavaScript
                            </span>
                            <ProfileProgress
                                courseColor='rgb(255 216 0)'
                                courseProgress={45}
                            />
                        </div>
                        <div className='courseProgress'>
                            <Avatar alt='CSS' src='/src/assets/css.png' variant="rounded" />
                            <span className='courseTitle'>
                                Основы CSS
                            </span>
                            <ProfileProgress
                                courseColor='rgb(0 58 255)'
                                courseProgress={14}
                            />
                        </div>
                        <div className='courseProgress'>
                            <Avatar alt='HTML' src='/src/assets/html.png' variant="rounded" />
                            <span className='courseTitle'>
                                Основы HTML
                            </span>
                            <ProfileProgress
                                courseColor='rgb(255 72 0)'
                                courseProgress={70}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export const ProfileCard = memo(ProfileCardComponent);
