import { FC, memo } from 'react';
import { Tetris } from '../../components/Tetris/Tetris';

const TetrisPageComponent: FC = () => {
    return (
        <>
            <Tetris />
        </>
    );
};

export const TetrisPage = memo(TetrisPageComponent);
