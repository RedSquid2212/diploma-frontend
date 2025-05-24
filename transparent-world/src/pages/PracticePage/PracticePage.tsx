import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import { Link, useParams } from 'react-router-dom';
import { CircleButton } from '../../components/CircleButton/CircleButton';

import styles from './PracticePage.module.scss';

type Props = {
    readonly course: string;
    readonly themes: readonly Theme[];
    readonly courseColor: string;
}

const PracticePageComponent: FC<Props> = ({ course, themes, courseColor }) => {
    const { theme } = useParams();
    const tasks = themes.find(courseTheme => courseTheme.name === theme)?.practice;
    return (
        <div className={styles.container}>
            {
                tasks?.map((task, index) => (
                    <Link to={`/courses/${course}/${theme}/practice/${task.id}`}>
                        <CircleButton
                            key={index}
                            text={task.title}
                            width={200}
                            height={200}
                            backgroundColor={courseColor}
                            fontSize='20px'
                            position={{}}
                            positionType='static'
                            animated={false}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export const PracticePage = memo(PracticePageComponent);
