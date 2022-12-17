import { useEffect, useState } from 'react';

import type { supabaseTypes } from '@/types/db.types';
import { sortArray } from '@/helpers/sortArray';
import { supabase } from '@/lib/supabase';

interface useScoreboardProps {
  sortedData: supabaseTypes[];
}

export const useScoreboard = ({ sortedData }: useScoreboardProps) => {
  const [scoreboard, setScoreboard] = useState<supabaseTypes[]>(sortedData);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public' }, (payload) => {
        const newEmoji = payload.new as supabaseTypes;
        setScoreboard((storedEmoji) => sortArray([...storedEmoji, newEmoji]));
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public' }, (payload) => {
        setScoreboard((storedEmoji) => {
          const temp = [...storedEmoji];
          const findValueIndex = temp.findIndex((elm) => elm['id'] === payload.new['id']);
          temp[findValueIndex]['count'] = payload.new['count'];
          return sortArray(temp);
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { scoreboard, setScoreboard };
};
