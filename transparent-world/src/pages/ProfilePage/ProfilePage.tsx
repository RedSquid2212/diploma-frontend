import { FC, memo } from 'react';
import { Header } from '../../components/Header/Header';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { Leaderboard } from '../../components/Leaderboard/Leaderboard';

import styles from './ProfilePage.module.scss';

const ProfilePageComponent: FC = () => {
    return (
        <div>
            <Header />
            <div className={styles.profileContainer}>
                <ProfileCard />
                <Leaderboard />
            </div>
        </div>
    );
}

export const ProfilePage = memo(ProfilePageComponent);
