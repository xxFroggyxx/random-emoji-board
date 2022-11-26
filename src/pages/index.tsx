import Head from 'next/head';
import { Board } from '@/components/Board';
import { wrapper } from '@/styles/app.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emoji app!</title>
        <meta name="description" content="Emoji app!" />
      </Head>
      <main className={wrapper}>
        <Board />
      </main>
    </div>
  );
}
