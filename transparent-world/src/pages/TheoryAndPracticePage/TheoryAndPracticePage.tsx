import { FC, memo } from 'react';
import { CircleButton } from '../../components/CircleButton/CircleButton';

import styles from './TheoryAndPracticePage.module.scss';

type Props = {
    readonly buttonColor: string;
};

const TheoryAndPracticePageComponent: FC<Props> = ({ buttonColor }) => {
    return (
        <div className={styles.container}>
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
        </div>
    );
};

export const TheoryAndPracticePage = memo(TheoryAndPracticePageComponent);
