import type { Todo } from "../types/Todo";

type TodoArray = {
  todoArray: Array<Todo>;
};

export const TodoResult = (props: TodoArray) => {
  const { todoArray } = props;

  const completed = () =>
    todoArray.filter((todo) => todo.checked === true).length;

  const unCompleted = () =>
    todoArray.filter((todo) => todo.checked === false).length;

  
  return (
    <p>
      全てのタスク: {todoArray.length} 完了済み: {completed()} 未完了:{" "}
      {unCompleted()}
    </p>
  );
};
