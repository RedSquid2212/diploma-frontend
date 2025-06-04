import { FC, memo } from 'react';

import { Header } from '../../components/Header/Header';
import { TestModal } from '../../components/TestModal/TestModal';

const PracticePageComponent: FC = () => {
    return (
        <div>
            <Header />
            <TestModal
                title='Тег для ссылки'
                text='Какой HTML-тег создает ссылку?'
                variants={['<a>', '<link>', '<p>', '<div>']}
                answer='<a>'
            />
        </div>
    );
};

export const PracticePage = memo(PracticePageComponent);
