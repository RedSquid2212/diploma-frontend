import { FC, memo } from "react";
import { ThemesGrid } from "../../components/ThemesGrid/ThemesGrid";
import { jsThemes } from "../../mocks/jsThemes";
import './JavaScriptThemesPage.scss';

const JavaScriptThemesPageComponent: FC = () => {
    return (
        <div className="grid-container">
            <ThemesGrid themes={jsThemes} colorBase={170} />
        </div>
    );
};

export const JavaScriptThemesPage = memo(JavaScriptThemesPageComponent);
