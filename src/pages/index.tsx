import Head from 'next/head';

import { Board } from '@/components/Board';
import { wrapperStyle } from '@/styles/app.css';
import { usePointWithHistory } from '@/hooks/usePointWithHistory';

export default function Home() {
  const { points, setPoints } = usePointWithHistory();
  return (
    <div>
      <Head>
        <title>Emoji app!</title>
        <meta name="description" content="Emoji app!" />
      </Head>
      <main className={wrapperStyle}>
        <Board points={points} setPoints={setPoints} />
      </main>
    </div>
  );
}
