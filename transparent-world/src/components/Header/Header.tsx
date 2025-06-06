import { FC, memo } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

import styles from './Header.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext/AppContext';

const HeaderComponent: FC = () => {
    const context = useAppContext();
    const tasks = context?.data.courses
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks) ?? [];
    const randomIndex = Math.floor(Math.random() * tasks?.length);

    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <Avatar
                    alt='app-icon'
                    src='/src/assets/app-icon.png'
                    sx={{ width: 66, height: 66 }}
                />
            </Link>
            <div className={styles.links}>
                <Link to={'/'}>
                    Курсы
                </Link>
                <Link to={'/js'}>
                    JavaScript
                </Link>
                <Link to={'/css'}>
                    CSS
                </Link>
                <Link to={'/html'}>
                    HTML
                </Link>
                <Link to={'/game'}>
                    Игровой режим
                </Link>
                <Link to={`/task/${tasks[randomIndex]?._id}`}>
                    Случайная задача
                </Link>
            </div>
            <UserAvatar
                username='Lina Shmantsar'
            />
        </header>
    );
};

export const Header = memo(HeaderComponent);
