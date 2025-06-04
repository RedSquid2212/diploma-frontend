import { LinearProgress } from '@mui/material';
import { FC, memo } from 'react';

import './LevelProgress.scss';

const LevelProgressComponent: FC = () => {
    return (
        <div className='levelProgress'>
            <LinearProgress variant="determinate" value={45} />
            <div className='levelStat'>
                <span>
                    45/100 XP
                </span>
                <span>
                    2 уровень
                </span>
            </div>
        </div>
    );
};

export const LevelProgress = memo(LevelProgressComponent);
