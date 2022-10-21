import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodoById, getTodos } from "../../api/api";
import { Todo } from "./todo.model";

const keys = {
  all: ['todos'],
  byId: (id: number) => [...keys.all, id],
} as const;

const useCashedTodoInitialData = (id: number) => {
  const queryClient = useQueryClient();
  return {
    initialData() {
      return queryClient
        .getQueryData<Todo[]>(keys.all)
        ?.find((t) => t.id === id);
    },
  }
}

const useTodos = () => {
  return useQuery(keys.all, getTodos);
}

const useTodo = (id: number) => {
  return useQuery(keys.byId(id), () => getTodoById(id), {
    ...useCashedTodoInitialData(id),
  });
}

export {
  keys,
  useCashedTodoInitialData,
  useTodos,
  useTodo,
}
