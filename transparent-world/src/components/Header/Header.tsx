import { FC, memo } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

import styles from './Header.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderComponent: FC = () => {
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
                <Link to={'/html'}>
                    Игровой режим
                </Link>
                <Link to={'/html'}>
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
