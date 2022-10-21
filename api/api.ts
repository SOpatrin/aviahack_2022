import { Todo } from "./models";
import { apiBasePath } from "../config"

export async function getTodos(): Promise<Todo[]> {
  return (await fetch(new URL('todos', apiBasePath))).json();
}
