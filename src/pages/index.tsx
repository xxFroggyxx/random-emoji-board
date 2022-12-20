import Head from 'next/head';

import { Board } from '@/components/Board';
import { Header } from '@/components/Header';
import { wrapperStyle } from '@/styles/app.css';
import { usePointWithHistory } from '@/hooks/usePointWithHistory';
import { Scoreboard } from '@/components/Scoreboard';
import type { ScoreboardType } from '@/types/scoreboard.types';
import { supabase } from '@/lib/supabase';
import { sortArray } from '@/helpers/sortArray';
import { useScoreboard } from '@/hooks/useScoreboard';

interface HomeProps {
  sortedData: ScoreboardType[];
}

export default function Home({ sortedData }: HomeProps) {
  const { points, setPoints, history, updateHistory } = usePointWithHistory();
  const { scoreboard } = useScoreboard({ sortedData });

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

export const getServerSideProps = async () => {
  const { data: emojistore, error } = await supabase.from('emoji-store').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cannot get data from database.');
  }

  const sortedData = sortArray(emojistore);

  return { props: { sortedData } };
};
