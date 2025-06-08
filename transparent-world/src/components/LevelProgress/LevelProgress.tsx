import { LinearProgress } from '@mui/material';
import { FC, memo } from 'react';

import './LevelProgress.scss';
import { levelMapper } from '../../utils/levelMapper';

type Props = {
    readonly xp: number;
    readonly currentLevel: number;
};

const LevelProgressComponent: FC<Props>= ({ xp, currentLevel }) => {
    const MAX = levelMapper[currentLevel + 1] ?? 0;
    const MIN = levelMapper[currentLevel] ?? 0;
    const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

    return (
        <div className='levelProgress'>
            <LinearProgress variant="determinate" value={normalise(xp)} />
            <div className='levelStat'>
                <span>
                    { xp } / { MAX } XP
                </span>
                <span>
                    { currentLevel + 1 } уровень
                </span>
            </div>
        </div>
    );
};

export const LevelProgress = memo(LevelProgressComponent);
