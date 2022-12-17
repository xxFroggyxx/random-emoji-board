import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Board } from '@/components/Board';
import { Header } from '@/components/Header';
import { wrapperStyle } from '@/styles/app.css';
import { usePointWithHistory } from '@/hooks/usePointWithHistory';
import { Scoreboard } from '@/components/Scoreboard';
import type { supabaseTypes } from '@/types/db.types';
import { supabase } from '@/lib/supabase';
import { sortArray } from '@/helpers/sortArray';

interface HomeProps {
  sortedData: supabaseTypes[];
}

export const getServerSideProps = async () => {
  const { data: emojistore, error } = await supabase.from('emoji-store').select('*');

  if (error) {
    console.error(error);
    throw new Error(`Problem z bazą danych`);
  }

  const sortedData = sortArray(emojistore);

  return { props: { sortedData } };
};

export default function Home({ sortedData }: HomeProps) {
  const { points, setPoints, history, updateHistory } = usePointWithHistory();
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

  return (
    <div>
      <Head>
        <title>Emoji app!</title>
        <meta name="description" content="Emoji app!" />
      </Head>
      <main className={wrapperStyle}>
        <Header points={points} setPoints={setPoints} history={history} updateHistory={updateHistory} />
        <Board points={points} setPoints={setPoints} />
        <Scoreboard scoreboard={scoreboard} />
      </main>
    </div>
  );
}
