import type { NextPage } from 'next';
import Link from 'next/link';
import StorageChart from '../components/StorageChart/StorageChart';
import dataChart from '../components/StorageChart/data.json';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">
        Hello{' '}
        <Link href={'https://app.aviahack.com/team'}>
          <a
            className="border-b-2 border-transparent text-blue-600 transition-colors hover:border-blue-600"
            target="_blank"
          >
            Aviahack!
          </a>
        </Link>
      </h1>

      <p className="mt-3 text-2xl">Chart with some useless data ⬇️</p>

      <div className="h-80 w-10/12">
        <StorageChart data={dataChart} />
      </div>
    </>
  );
};

export default Home;
