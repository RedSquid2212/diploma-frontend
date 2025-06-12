import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { FC, memo } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

import './ProfileCard.scss';
import { ProfileProgress } from '../ProfileProgress/ProfileProgress';
import { LevelProgress } from '../LevelProgress/LevelProgress';
import { useAppContext } from '../AppContext/AppContext';

import jsLogo from '../../assets/js.png';
import cssLogo from '../../assets/css.png';
import htmlLogo from '../../assets/html.png';

const ProfileCardComponent: FC = () => {
    const context = useAppContext();
    const user = context?.data.user;
    const courses = context?.data.courses;

    const jsCourseProgress = courses?.find(course => course.title === 'JS')?.progress;
    const cssCourseProgress = courses?.find(course => course.title === 'CSS')?.progress;
    const htmlCourseProgress = courses?.find(course => course.title === 'HTML')?.progress;

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
                title={
                    <UserAvatar username={user?.username ?? ''} />
                }
                subheader={
                    <div className='statContainer'>
                        <span>{ user?.xp } XP</span>
                        <span>{ user?.gameXp } game XP</span>
                        <span>{ user?.level } уровень</span>
                    </div>
                }
            />
            <CardContent>
                <LevelProgress xp={user?.xp ?? 0} currentLevel={user?.level ?? 1} />
                <hr className='separator' />
                <div className='achievementsContainer'>
                    <h2 className='progressHeader'>
                        Достижения
                    </h2>
                    {
                        user?.achievements.map(item => <div className='achievement'><EmojiEventsIcon/>{item}</div>)
                    }
                </div>
                <hr className='separator' />
                <div className='userProgressContaner'>
                    <h2 className='progressHeader'>
                        Прогресс по курсам
                    </h2>
                    <div className='userCoursesContainer'>
                        <div className='userCourseProgress'>
                            <Avatar alt='JS' src={jsLogo} variant="rounded" />
                            <span className='userCourseTitle'>
                                Основы JavaScript
                            </span>
                            <ProfileProgress
                                courseColor='rgb(255 216 0)'
                                courseProgress={jsCourseProgress ?? 0}
                            />
                        </div>
                        <div className='userCourseProgress'>
                            <Avatar alt='CSS' src={cssLogo} variant="rounded" />
                            <span className='userCourseTitle'>
                                Основы CSS
                            </span>
                            <ProfileProgress
                                courseColor='rgb(0 58 255)'
                                courseProgress={cssCourseProgress ?? 0}
                            />
                        </div>
                        <div className='userCourseProgress'>
                            <Avatar alt='HTML' src={htmlLogo} variant="rounded" />
                            <span className='userCourseTitle'>
                                Основы HTML
                            </span>
                            <ProfileProgress
                                courseColor='rgb(255 72 0)'
                                courseProgress={htmlCourseProgress ?? 0}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export const ProfileCard = memo(ProfileCardComponent);
