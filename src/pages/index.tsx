import Head from 'next/head';

import { Board } from '@/components/Board';
import { Header } from '@/components/Header';
import { wrapperStyle } from '@/styles/app.css';
import { usePointWithHistory } from '@/hooks/usePointWithHistory';

export default function Home() {
  const { points, setPoints, history, updateHistory } = usePointWithHistory();
  return (
    <div>
      <Head>
        <title>Emoji app!</title>
        <meta name="description" content="Emoji app!" />
      </Head>
      <main className={wrapperStyle}>
        <Header points={points} setPoints={setPoints} history={history} updateHistory={updateHistory} />
        <Board points={points} setPoints={setPoints} />
      </main>
    </div>
  );
}
