import type { supabaseTypes } from '@/types/db.types';

export const sortArray = (arr: supabaseTypes[]) => {
  return arr.sort((a, b) => b['count'] - a['count']);
};
