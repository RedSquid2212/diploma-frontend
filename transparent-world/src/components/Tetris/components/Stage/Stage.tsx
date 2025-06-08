import { FC, memo } from 'react';
import { Cell } from '../Cell/Cell';
import { TETROMINOS } from '../../helpers/tetrominos';
import { StyledStage } from './Stage.styled';

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
}

const StageComponent: FC<Props> = ({ stage }) => (
  <StyledStage>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
  </StyledStage>
)

export const Stage = memo(StageComponent);