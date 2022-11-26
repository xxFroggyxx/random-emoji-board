import Head from 'next/head';
import { Board } from '@/components/Board';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emoji app!</title>
        <meta name="description" content="Emoji app!" />
      </Head>
      <Board />
    </div>
  );
}
