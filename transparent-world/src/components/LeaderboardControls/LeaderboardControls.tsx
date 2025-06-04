import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FC, memo } from 'react';

import './LeaderboardControls.scss';

type Props = {
    readonly value: string;
    readonly onValueChange: (newValue: string) => void;
};

const LeaderboardControlsComponent: FC<Props> = ({ value, onValueChange }) => {
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl>
            <RadioGroup
                defaultValue="general"
                name="radio-buttons-group"
                value={value}
                onChange={handleValueChange}
            >
                <FormControlLabel
                    value="general"
                    control={<Radio />}
                    label={<span className='label'>Общий</span>}
                />
                <FormControlLabel
                    value="game"
                    control={<Radio />}
                    label={<span className='label'>Игровой</span>}
                />
            </RadioGroup>
        </FormControl>
    );
};

export const LeaderboardControls = memo(LeaderboardControlsComponent);
