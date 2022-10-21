import type { NextPage } from 'next';
import Todo from '../components/Todo/Todo';
import { useTodos } from '../components/Todo/todo.query';

const Home: NextPage = () => {
  const { data } = useTodos();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hello <span className="text-blue-600">Aviahack!</span>
        </h1>

        <p className="mt-3 text-2xl">There are some mock todos ⬇️</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {data?.map(Todo)}
        </div>
      </main>
    </div>
  );
};

export default Home;
