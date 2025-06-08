import { FC, memo, useRef, useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { useGameStatus } from './hooks/useGameStatus';
import { Stage } from './components/Stage/Stage';
import Display from './components/Display/Display';
import { StartButton } from './components/StartButton/StartButton';
import { createStage, isColliding } from './helpers/helpers';
import { StyledTetrisWrapper, StyledTetris } from './Tetris.styled';

import './Tetris.scss';
import { TestModal } from '../TestModal/TestModal';
import { useAppContext } from '../AppContext/AppContext';
import { client } from '../../services/client.service';

const TetrisComponent: FC = () => {
  const [dropTime, setDroptime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const context = useAppContext();
  const user = context?.data.user;
  const [answerSuccess, setAnswerSuccess] = useState(false);

  const gameArea = useRef<HTMLDivElement>(null);

  const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer, setIsModalOpen);
  const { score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared, answerSuccess);

  const getRandomTask = () => {
    const tasks = context?.data.courses
      .flatMap(item => item.themes)
      .flatMap(item => item.tasks)
      .filter(item => item.type === 'test') ?? [];
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDroptime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameOver(false);
  };

  const handleGameOver = async () => {
    await client.updateGameRecord({
      userId: user?._id ?? '',
      newGameXp: score,
    });
  }

  const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        if (repeat) return;
        setDroptime(30);
      } else if (keyCode === 38) {
        playerRotate(stage);
      }
    }
  };

  const drop = (): void => {
    if (rows > level * 10) {
      setLevel(prev => prev + 1);
      setDroptime(1000 / level + 200);
    }

    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDroptime(null);
        handleGameOver();
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    if (!isModalOpen && !gameOver) {
      drop();
    }
  }, dropTime);

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <div className='gameInfo'>
        <h1 className='gameTitle'>
          Тетрис с модификациями
        </h1>
        <div className='rules'>
          Правила игры:
          <ul>
            <li>
              Управляйте фигурами, используя клавиши &#8592; (для движения влево), &#8594; (для движения вправо), &#8593; (для поворота), &#8595; (для ускорения)
            </li>
            <li>
              При заполнении ряда решайте задачу из модального окна
            </li>
            <li>
              Будьте внимательны: у вас всего одна попытка на решение!
            </li>
          </ul>
        </div>
      </div>
      <StyledTetris>
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='Game Over!' />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
      <TestModal
        open={isModalOpen}
        onOpen={setIsModalOpen}
        task={getRandomTask()}
        themeId={null}
        isGameMode={true}
        xp={score}
        onGameOver={setGameOver}
        onAnswerSuccess={setAnswerSuccess}
      />
    </StyledTetrisWrapper>
  );
};

export const Tetris = memo(TetrisComponent);
