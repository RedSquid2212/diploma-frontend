import { FC, memo } from 'react';
import { CourseCard } from '../../components/CourseCard/CourseCard';

import styles from './CoursesPage.module.scss';
import { Header } from '../../components/Header/Header';
import { useAppContext } from '../../components/AppContext/AppContext';

const CoursesPageComponent: FC = () => {
    const context = useAppContext();
    const coursesProgress = context?.data.courses
        .map(item => ({
            courseName: item.title,
            progress: item.progress,
        }));

    return (
        <>
            <Header />
            <div className={styles.coursesContainer}>
                <CourseCard
                    courseName='JS'
                    title='Основы JavaScript'
                    courseColor='rgb(255 216 0)'
                    progress={coursesProgress?.find(item => item.courseName === 'JS')?.progress ?? 0}
                    avatarSrc='/src/assets/js.png'
                    themesCount='18 тем'
                    hoursCount='~20 часов'
                />
                <CourseCard
                    courseName='CSS'
                    title='Основы CSS'
                    courseColor='rgb(0 58 255)'
                    progress={coursesProgress?.find(item => item.courseName === 'CSS')?.progress ?? 0}
                    avatarSrc='/src/assets/css.png'
                    themesCount='8 тем'
                    hoursCount='~12 часов'
                />
                <CourseCard
                    courseName='HTML'
                    title='Основы HTML'
                    courseColor='rgb(255 72 0)'
                    progress={coursesProgress?.find(item => item.courseName === 'HTML')?.progress ?? 0}
                    avatarSrc='/src/assets/html.png'
                    themesCount='8 тем'
                    hoursCount='~12 часов'
                />
            </div>
        </>
    )
};

export const CoursesPage = memo(CoursesPageComponent);
