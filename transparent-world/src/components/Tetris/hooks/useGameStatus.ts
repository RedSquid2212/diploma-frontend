import { useEffect, useState } from 'react';
import { ROWPOINTS } from '../helpers/tetrominos';

export const useGameStatus = (rowsCleared: number, answerSuccess: boolean) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (rowsCleared > 0 && answerSuccess) {
      setScore(prev => prev + ROWPOINTS[rowsCleared - 1] * level);
      setRows(prev => prev + rowsCleared);
    }
  }, [rowsCleared, level, answerSuccess]);

  return { score, setScore, rows, setRows, level, setLevel };
};