import { FC, memo, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { Leaderboard } from '../../components/Leaderboard/Leaderboard';

import styles from './ProfilePage.module.scss';
import { client } from '../../services/client.service';

const ProfilePageComponent: FC = () => {
    useEffect(() => {
        const getLeaderboard = async () => {
            await client.getGameLeaderboard();
        };
        getLeaderboard();
    }, []);
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
