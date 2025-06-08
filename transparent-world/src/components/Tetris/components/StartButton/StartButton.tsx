import { FC, memo } from 'react';
import { StyledStartButton } from './StartButton.styled';

type Props = {
  callback: () => void;
};

const StartButtonComponent: FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export const StartButton = memo(StartButtonComponent);