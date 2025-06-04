import { LinearProgress } from '@mui/material';
import { FC, memo } from 'react';

const LevelProgressComponent: FC = () => {
    return (
        <div>
            <LinearProgress variant="determinate" value={45}/>
            <span>
                45/100 XP
            </span>
            <span>
                2 уровень
            </span>
        </div>
    );
};

export const LevelProgress = memo(LevelProgressComponent);
