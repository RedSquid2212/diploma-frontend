import { FC, memo } from 'react';
import { Header } from '../../components/Header/Header';
import { CourseContent } from '../../components/CourseContent/CourseContent';
import { CourseHeaderCard } from '../../components/CourseHeaderCard/CourseHeaderCard';
import { ProgressCard } from '../../components/ProgressCard/ProgressCard';

import styles from './TheoryPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { courseNamesMapper } from '../../utils/courseNamesMapper';
import { useAppContext } from '../../components/AppContext/AppContext';

const TheoryPageComponent: FC = () => {
    const { course } = useParams();
    const navigate = useNavigate();

    const courseName = courseNamesMapper[course ?? 'unknown'];
    const courseColor = course === 'js' ? 'rgb(255 216 0)' : (course === 'css' ? 'rgb(0 58 255)' : 'rgb(255 72 0)');
    const context = useAppContext();

    if (!context) {
        navigate('/login');
    }

    const themes = context?.data.courses
        ?.filter(item => item.title === course?.toUpperCase())?.flatMap(item => item.themes) ?? [];

    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <CourseHeaderCard courseName={courseName} />
                <div className={styles.contentContainer}>
                    <CourseContent themes={themes} />
                    <ProgressCard
                        courseColor={courseColor}
                        buttonLabel='Перейти к практике'
                        navigateTo={`/${course}/practice`}
                    />
                </div>
            </div>
        </div>
    );
};

export const TheoryPage = memo(TheoryPageComponent);
