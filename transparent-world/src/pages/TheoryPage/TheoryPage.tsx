import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import { Header } from '../../components/Header/Header';
import { CourseContent } from '../../components/CourseContent/CourseContent';
import { CourseHeaderCard } from '../../components/CourseHeaderCard/CourseHeaderCard';

type Props = {
    readonly themes: readonly Theme[];
    readonly courseColor: string;
};

const TheoryPageComponent: FC<Props> = ({ themes }) => {
    return (
        <div>
            <Header />
            <div>
                <CourseHeaderCard />
                <CourseContent themes={themes} />
            </div>
        </div>
    );
};

export const TheoryPage = memo(TheoryPageComponent);
