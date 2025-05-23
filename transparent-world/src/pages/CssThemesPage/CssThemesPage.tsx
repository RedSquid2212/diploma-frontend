import { FC, memo } from 'react';
import { ThemesGrid } from '../../components/ThemesGrid/ThemesGrid';
import { cssThemes } from '../../mocks/cssThemes';

const CssThemesPageComponent: FC = () => {
    return (
        <div>
            <ThemesGrid themes={cssThemes} colorBase={220} course='css' />
        </div>
    );
};

export const CssThemesPage = memo(CssThemesPageComponent);
