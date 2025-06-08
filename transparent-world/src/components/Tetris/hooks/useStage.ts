import { useEffect, useState } from 'react';
import type { PLAYER } from './usePlayer';
import { createStage } from '../helpers/helpers';

export type STAGECELL = [string | number, string];
export type STAGE = STAGECELL[][];

export const useStage = (player: PLAYER, resetPlayer: () => void, onModelOpen: (isOpen: boolean) => void) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    if (!player.pos) return;

    setRowsCleared(0);

    const sweepRows = (newStage: STAGE): STAGE => {
      return newStage.reduce((ack, row) => {
        if (row.every(cell => cell[0] !== 0)) {
          onModelOpen(true);
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']) as STAGECELL[]);
          return ack;
        }
        ack.push(row);
        return ack;
      }, [] as STAGE);
    };

    const updateStage = (prevStage: STAGE): STAGE => {
      const newStage = prevStage.map(
        row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as STAGECELL[]
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            const newY = y + player.pos.y;
            const newX = x + player.pos.x;
            if (newStage[newY] && newStage[newY][newX]) {
              newStage[newY][newX] = [value, `${player.collided ? 'merged' : 'clear'}`];
            }
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer, onModelOpen]);

  return { stage, setStage, rowsCleared };
};