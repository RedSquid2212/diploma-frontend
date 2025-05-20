import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import './ThemesGrid.scss';
import { CircleButton } from '../CircleButton/CircleButton';
import { Grid } from '@mui/material';
import { generateColorInPalette } from '../../utils/colorGenerator';

type Props = {
    readonly themes: readonly Theme[];
    readonly colorBase: number;
};

const ThemesGridComponent: FC<Props> = ({ themes, colorBase }) => {
    return (
        <div>
            <Grid container spacing={3} columns={{xl: 5, md: 4, sm: 3, xs: 2}} className="themes-container">
                {
                    themes.map((theme, index) => (
                        <Grid key={index} size={1} className="theme-cell">
                            <CircleButton
                                text={`${index + 1}. ${theme.name}`}
                                width={150}
                                height={150}
                                backgroundColor={generateColorInPalette(colorBase, [70, 90], [50, 70])}
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
