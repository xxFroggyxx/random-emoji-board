import { v4 as uuidv4 } from 'uuid';
import type { CSSProperties, Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { getRandomEmoji } from '@/helpers/getRandomEmoji';
import type { Point } from '@/types/point';

import { boardStyle, pointStyle } from './Board.css';

interface BoardProps {
  points: Point[];
  setPoints: Dispatch<SetStateAction<Point[]>>;
}

export const Board = ({ points, setPoints }: BoardProps) => {
  const handleBoardClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const emoji = getRandomEmoji();

    setPoints([
      ...points,
      {
        id: uuidv4(),
        x: event.clientX - event.currentTarget.offsetLeft,
        y: event.clientY - event.currentTarget.offsetTop,
        content: emoji,
      },
    ]);
  };

  return (
    <div className={boardStyle} onClick={handleBoardClick}>
      {points.map(({ id, x, y, content }) => (
        <span
          key={id}
          className={pointStyle}
          role="img"
          aria-label="emoji"
          style={{ '--left': `${x}px`, '--top': `${y}px` } as CSSProperties}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ))}
    </div>
  );
};
