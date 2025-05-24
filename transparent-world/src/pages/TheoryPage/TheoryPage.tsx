import { FC, memo } from 'react';
import { CircleButton } from '../../components/CircleButton/CircleButton';
import { useParams } from 'react-router-dom';

import styles from './TheoryPage.module.scss';
import { Theme } from '../../models/theme';

type Props = {
    readonly themes: readonly Theme[];
    readonly courseColor: string;
};

const TheoryPageComponent: FC<Props> = ({ themes, courseColor }) => {
    const { theme } = useParams();
    const chapters = themes.find(courseTheme => courseTheme.name === theme)?.theory;
    console.log(chapters);
    return (
        <div className={styles.container}>
            {
                chapters?.map((chapter, index) => (
                    <CircleButton
                        key={index}
                        text={chapter.name}
                        width={200}
                        height={200}
                        backgroundColor={courseColor}
                        fontSize='20px'
                        position={{}}
                        positionType='static'
                        animated={false}
                    />
                ))
            }
        </div>
    );
};

export const TheoryPage = memo(TheoryPageComponent);
