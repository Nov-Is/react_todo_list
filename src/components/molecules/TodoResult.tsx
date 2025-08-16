import type { Todo } from "../types/Todo";

type TodoArray = {
  todoArray: Array<Todo>;
};

export const TodoResult = (props: TodoArray) => {
  const { todoArray } = props;
  return (
    <p>
      全てのタスク: {todoArray.length} 完了済み:{" "}
      {todoArray.filter((todo) => todo.checked === true).length} 未完了:{" "}
      {todoArray.filter((todo) => todo.checked === false).length}
    </p>
  );
};
