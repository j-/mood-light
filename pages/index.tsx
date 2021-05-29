import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mood light</title>
        <meta name="description" content="Turn your screen into a fancy mood light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li><Link href="/rainbow"><a>Rainbow</a></Link></li>
        <li><Link href="/solid-color"><a>Solid color</a></Link></li>
      </ul>
    </>
  );
};

export default Home;
