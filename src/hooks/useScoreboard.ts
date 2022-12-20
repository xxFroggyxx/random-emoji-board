import { useEffect, useState } from 'react';

import type { ScoreboardType } from '@/types/scoreboard.types';
import { sortArray } from '@/helpers/sortArray';
import { supabase } from '@/lib/supabase';

interface useScoreboardProps {
  sortedData: ScoreboardType[];
}

export const useScoreboard = ({ sortedData }: useScoreboardProps) => {
  const [scoreboard, setScoreboard] = useState<ScoreboardType[]>(sortedData);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public' }, (payload) => {
        const newEmoji = payload.new as ScoreboardType;
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
