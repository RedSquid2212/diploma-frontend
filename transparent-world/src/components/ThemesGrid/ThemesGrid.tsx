import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import './ThemesGrid.scss';
import { CircleButton } from '../CircleButton/CircleButton';
import { Grid } from '@mui/material';

type Props = {
    readonly themes: readonly Theme[];
};

const ThemesGridComponent: FC<Props> = ({ themes }) => {
    return (
        <div className="themes-container">
            <Grid container spacing={3} columns={{xl: 5, md: 4, sm: 3, xs: 2}}>
                {
                    themes.map((theme, index) => (
                        <Grid key={index} size={1} className="theme-cell">
                            <CircleButton
                                text={`${index + 1}. ${theme.name}`}
                                width={150}
                                height={150}
                                backgroundColor='red'
                                fontSize='16px'
                                position={{}}
                                positionType='static'
                                animated={false}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
};

export const ThemesGrid = memo(ThemesGridComponent);
