import { useRef, useState } from 'react';

export interface Point {
  id: string;
  x: number;
  y: number;
  content: string;
}

export const usePointWithHistory = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const history = useRef<Point[]>([]);

  const updateHistory = (newValue: Point[]) => {
    history.current = newValue;
  };

  return { points, setPoints, history: history.current, updateHistory };
};
