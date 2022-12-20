import { useRef, useState } from 'react';

import type { Point } from '@/types/point.types';

export const usePointWithHistory = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const history = useRef<Point[]>([]);

  const updateHistory = (newValue: Point[]) => {
    history.current = newValue;
  };

  return { points, setPoints, history: history.current, updateHistory };
};
