import Link from 'next/link';
import { Todo } from './todo.model';
import { paths } from '../../config';

type TodoProps = Todo;

const Todo: React.FC<TodoProps> = ({ id, title, completed }) => {
  return (
    <Link key={id} href={`${paths.todos}/${id}`}>
      <a className="mt-6 flex w-96 flex-col rounded-xl border p-6 text-left transition-colors hover:border-slate-300 hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-xl">
          This is todo number <span className="text-blue-600">{id}</span> and it
          is {completed ? 'done ✅' : 'in process ⌛️'}
        </p>
      </a>
    </Link>
  );
};

export default Todo;
