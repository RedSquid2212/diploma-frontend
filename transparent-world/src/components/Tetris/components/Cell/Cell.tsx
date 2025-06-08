import { FC, memo } from 'react';
import { TETROMINOS } from '../../helpers/tetrominos';
import { StyledCell } from './Cell.styled';

type Props = {
  type: keyof typeof TETROMINOS;
};

const CellComponent: FC<Props> = ({ type }) => <StyledCell type={type} color={TETROMINOS[type].color} />;

export const Cell = memo(CellComponent);