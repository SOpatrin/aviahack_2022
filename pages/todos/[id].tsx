import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Todo from '../../components/Todo/Todo';
import { useTodo } from '../../components/Todo/todo.query';

const TodoPage: NextPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data, isError } = useTodo(id);

  if (isError) {
    return <div>Error!</div>;
  }

  return <>{!data ? <div>Loading...</div> : <Todo {...data} />}</>;
};

export default TodoPage;
