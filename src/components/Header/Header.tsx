import type { Dispatch, SetStateAction } from 'react';

import type { Point } from '@/types/point';

import { Buttons } from './Buttons';
import { headerStyle } from './Header.css';
import { HistoryEmoji } from './HistoryEmoji';

interface HeaderProps {
  points: Point[];
  setPoints: Dispatch<SetStateAction<Point[]>>;
  history: Point[];
  updateHistory: (newValue: Point[]) => void;
}

export const Header = ({ points, setPoints, history, updateHistory }: HeaderProps) => {
  return (
    <header className={headerStyle}>
      <Buttons points={points} setPoints={setPoints} history={history} updateHistory={updateHistory} />
      <HistoryEmoji history={history} />
    </header>
  );
};
