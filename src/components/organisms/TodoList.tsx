import { TodoItem } from "../molecules/TodoItem";
import { TodoResult } from "../molecules/TodoResult";
import type { Todo } from "../types/Todo";

type Props = {
  todoArray: Array<Todo>;
  todoUpdateText: string;
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeCheckbox: (todoText: string) => void;
  updateTodoName: (todoText: string, newTodo: string) => void;
  changeEdit: (todoText: string) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList = (props: Props) => {
  const {
    todoArray,
    todoUpdateText,
    updateTodo,
    changeCheckbox,
    updateTodoName,
    changeEdit,
    deleteTodo,
  } = props;
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoArray.map((todo, index) => (
          <TodoItem
            todo={todo}
            todoUpdateText={todoUpdateText}
            updateTodo={updateTodo}
            changeCheckbox={changeCheckbox}
            changeEdit={changeEdit}
            updateTodoName={updateTodoName}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
      <TodoResult todoArray={todoArray} />
    </div>
  );
};
