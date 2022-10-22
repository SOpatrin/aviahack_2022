import type { NextPage } from 'next';
import Link from 'next/link';
import StorageChart from '../components/StorageChart/StorageChart';
import dataChart from '../components/StorageChart/data.json';
import { useSeries } from '../components/StorageChart/series.query';

const Home: NextPage = () => {
  const { data } = useSeries();

  return (
    <>
      <h1 className="text-6xl font-bold">
        Hello{' '}
        <Link href={'https://app.aviahack.com/team'}>
          <a
            className="border-b-2 border-transparent text-blue-500 transition-colors hover:border-blue-500"
            target="_blank"
          >
            Aviahack!
          </a>
        </Link>
      </h1>

      <p className="mt-3 text-2xl">Chart with data from api ⬇️</p>

      <div className="h-96 w-10/12">{data && <StorageChart data={data} />}</div>
    </>
  );
};

export default Home;
