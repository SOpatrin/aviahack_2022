import type { NextPage } from 'next';
import Link from 'next/link';
import StorageChart from '../components/StorageChart/StorageChart';
import Todo from '../components/Todo/Todo';
import { useTodos } from '../components/Todo/todo.query';
import dataChart from '../components/StorageChart/data.json';

const Home: NextPage = () => {
  const { data } = useTodos();

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

      <div className="h-80 w-full">
        <StorageChart data={dataChart} />
      </div>

      <p className="mt-3 text-2xl">There are some mock todos ⬇️</p>

      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        {data?.map(Todo)}
      </div>
    </>
  );
};

export default Home;
