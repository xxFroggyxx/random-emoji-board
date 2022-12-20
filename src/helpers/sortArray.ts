import type { ScoreboardType } from '@/types/scoreboard.types';

export const sortArray = (arr: ScoreboardType[]) => {
  return arr.sort((a, b) => {
    if (a.count === b.count) {
      return a.emoji > b.emoji ? 1 : -1;
    }
    return b.count - a.count;
  });
};
