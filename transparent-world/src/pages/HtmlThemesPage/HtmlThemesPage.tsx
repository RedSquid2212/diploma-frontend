import { FC, memo } from 'react';
import { ThemesGrid } from '../../components/ThemesGrid/ThemesGrid';
import { htmlThemes } from '../../mocks/htmlThemes';

const HtmlThemesPageComponent: FC = () => {
    return (
        <div>
            <ThemesGrid themes={htmlThemes} />
        </div>
    );
};

export const HtmlThemesPage = memo(HtmlThemesPageComponent);
