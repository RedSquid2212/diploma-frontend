import { FC, memo } from 'react';
import { CircleButton } from '../../components/CircleButton/CircleButton';

import styles from './TheoryAndPracticePage.module.scss';
import { Link, useParams } from 'react-router-dom';

type Props = {
    readonly buttonColor: string;
    readonly course: string;
};

const TheoryAndPracticePageComponent: FC<Props> = ({ buttonColor, course }) => {
    const { theme } = useParams();
    return (
        <div className={styles.container}>
            <Link to={`/courses/${course}/${theme}/theory`}>
                <CircleButton
                    text='Теория'
                    width={300}
                    height={300}
                    backgroundColor={buttonColor}
                    fontSize='32px'
                    position={{}}
                    positionType='static'
                    animated={false}
                />
            </Link>
            <Link to={`/courses/${course}/${theme}/practice`}>
                <CircleButton
                    text='Практика'
                    width={300}
                    height={300}
                    backgroundColor={buttonColor}
                    fontSize='32px'
                    position={{}}
                    positionType='static'
                    animated={false}
                />
            </Link>
        </div>
    );
};

export const TheoryAndPracticePage = memo(TheoryAndPracticePageComponent);
