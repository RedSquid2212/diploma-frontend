import { FC, memo } from 'react';
import { Tetris } from '../../components/Tetris/Tetris';
import { Header } from '../../components/Header/Header';

const TetrisPageComponent: FC = () => {
    return (
        <>
            <Header />
            <Tetris />
        </>
    );
};

export const TetrisPage = memo(TetrisPageComponent);
