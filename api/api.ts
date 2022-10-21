import { Todo } from "../components/Todo/todo.model";
import { apiBasePath, paths } from "../config"

export async function getTodos(): Promise<Todo[]> {
  return (await fetch(new URL(`${paths.todos}`, apiBasePath))).json();
}

export async function getTodoById(id: number): Promise<Todo> {
  return (await fetch(new URL(`${paths.todos}/${id}`, apiBasePath))).json();
}
