import type { supabaseTypes } from '@/types/db.types';

export const sortArray = (arr: supabaseTypes[]) => {
  return arr.sort((a, b) => {
    if (a.count === b.count) {
      return a.emoji > b.emoji ? 1 : -1;
    }
    return b.count - a.count;
  });
};
