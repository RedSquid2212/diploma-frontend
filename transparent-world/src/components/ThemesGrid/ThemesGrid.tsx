import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import './ThemesGrid.scss';
import { CircleButton } from '../CircleButton/CircleButton';
import { Grid } from '@mui/material';
import { generateColorInPalette } from '../../utils/colorGenerator';
import { Link } from 'react-router-dom';

type Props = {
    readonly themes: readonly Theme[];
    readonly colorBase: number;
    readonly course: string;
};

const ThemesGridComponent: FC<Props> = ({ themes, colorBase, course }) => {
    const themesCount = themes.length;
    return (
        <div>
            <Grid
                container
                spacing={3}
                columns={{ xl: themesCount / 2 * 150 > 1200 ? themesCount / 4 : themesCount / 2, md: 4, sm: 3, xs: 2 }}
                className="themes-container"
            >
                {
                    themes.map((theme, index) => (
                        <Grid key={index} size={1} className="theme-cell">
                            <Link to={`/courses/${course}/${theme.name}`}>
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
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
};

export const ThemesGrid = memo(ThemesGridComponent);
