import { FC, memo } from 'react';
import { CourseCard } from '../../components/CourseCard/CourseCard';

import styles from './CoursesPage.module.scss';

const CoursesPageComponent: FC = () => {
    return (
        <div className={styles.coursesContainer}>
            <CourseCard
                courseName='JS'
                title='Основы JavaScript'
                courseColor='rgb(255 216 0)'
                progress={12}
                avatarSrc='/src/assets/js.png'
                themesCount='18 тем'
                hoursCount='~20 часов'
            />
            <CourseCard
                courseName='CSS'
                title='Основы CSS'
                courseColor='rgb(0 58 255)'
                progress={28}
                avatarSrc='/src/assets/css.png'
                themesCount='8 тем'
                hoursCount='~12 часов'
            />
            <CourseCard
                courseName='HTML'
                title='Основы HTML'
                courseColor='rgb(255 72 0)'
                progress={90}
                avatarSrc='/src/assets/html.png'
                themesCount='8 тем'
                hoursCount='~12 часов'
            />
        </div>
    )
};

export const CoursesPage = memo(CoursesPageComponent);
