import type { Dispatch, SetStateAction } from 'react';

import type { Point } from '@/types/point';

import { buttonsStyle, buttonStyle } from './Buttons.css';

interface ButtonsProps {
  points: Point[];
  setPoints: Dispatch<SetStateAction<Point[]>>;
  history: Point[];
  updateHistory: (newValue: Point[]) => void;
}

export const Buttons = ({ points, setPoints, history, updateHistory }: ButtonsProps) => {
  const hasPoints = points.length > 0;
  const hasHistory = history.length > 0;

  const handleUndoClick = () => {
    if (!hasPoints) return;

    const popList = [...points];
    const delElementList = popList.pop();

    if (delElementList) {
      setPoints(popList);
      updateHistory([...history, delElementList]);
    }
  };
  const handleRedoClick = () => {
    if (!hasHistory) return;

    const pop = [...history];
    const delElementList = pop.pop();

    if (delElementList) {
      setPoints([...points, delElementList]);
      updateHistory(pop);
    }
  };
  return (
    <section className={buttonsStyle}>
      <button className={buttonStyle} disabled={!hasPoints} onClick={handleUndoClick}>
        Undo
      </button>
      <button className={buttonStyle} disabled={!hasHistory} onClick={handleRedoClick}>
        Redo
      </button>
    </section>
  );
};
