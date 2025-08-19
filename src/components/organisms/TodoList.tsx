import { TodoItem } from "../molecules/TodoItem";
import { TodoResult } from "../molecules/TodoResult";
import type { Todo } from "../types/Todo";

type Props = {
  todoArray: Array<Todo>;
  editingItems: {[id: number]: string};
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  changeCheckbox: (id: number) => void;
  updateTodoName: (id: number, newTodo: string) => void;
  changeEdit: (id: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList = (props: Props) => {
  const {
    todoArray,
    editingItems,
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
            editingItems={editingItems}
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
