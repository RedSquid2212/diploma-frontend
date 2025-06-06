import { FC, memo } from 'react';
import { Header } from '../../components/Header/Header';
import { CourseContent } from '../../components/CourseContent/CourseContent';
import { CourseHeaderCard } from '../../components/CourseHeaderCard/CourseHeaderCard';
import { ProgressCard } from '../../components/ProgressCard/ProgressCard';

import styles from './TheoryPage.module.scss';
import { useParams } from 'react-router-dom';
import { jsThemes } from '../../mocks/jsThemes';
import { cssThemes } from '../../mocks/cssThemes';
import { htmlThemes } from '../../mocks/htmlThemes';
import { courseNamesMapper } from '../../utils/courseNamesMapper';

const TheoryPageComponent: FC = () => {
    const { course } = useParams();
    const courseName = courseNamesMapper[course ?? 'unknown'];
    const themes = course === 'js' ? jsThemes : (course === 'css' ? cssThemes : htmlThemes);
    const courseColor = course === 'js' ? 'rgb(255 216 0)' : (course === 'css' ? 'rgb(0 58 255)' : 'rgb(255 72 0)');
    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <CourseHeaderCard courseName={courseName} />
                <div className={styles.contentContainer}>
                    <CourseContent themes={themes} />
                    <ProgressCard courseColor={courseColor} />
                </div>
            </div>
        </div>
    );
};

export const TheoryPage = memo(TheoryPageComponent);
