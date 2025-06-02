import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import { useParams } from 'react-router-dom';

import styles from './PracticePage.module.scss';

type Props = {
    readonly course: string;
    readonly themes: readonly Theme[];
    readonly courseColor: string;
}

const PracticePageComponent: FC<Props> = ({ themes }) => {
    const { theme } = useParams();
    const tasks = themes.find(courseTheme => courseTheme.name === theme);
    return (
        <div className={styles.container}>
            { tasks?.label }
        </div>
    );
};

export const PracticePage = memo(PracticePageComponent);
