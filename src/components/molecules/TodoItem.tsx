import type { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  todoUpdateText: string;
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeCheckbox: (todoText: string) => void;
  changeEdit: (todoText: string) => void;
  updateTodoName: (todoText: string, newTodo: string) => void;
  deleteTodo: () => void;
};

export const TodoItem = (props: Props) => {
  const {
    todo,
    todoUpdateText,
    updateTodo,
    changeCheckbox,
    changeEdit,
    updateTodoName,
    deleteTodo,
  } = props;
  return (
    <li key={todo.text}>
      {todo.isEditing ? (
        <>
          <div className="todo-textbox">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => changeCheckbox(todo.text)}
            />
            <input type="text" value={todoUpdateText} onChange={updateTodo} />
          </div>
          <div>
            <button
              onClick={() => updateTodoName(todo.text, todoUpdateText)}
              style={{ backgroundColor: "#1E90FF" }}
            >
              更新
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-textbox">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => changeCheckbox(todo.text)}
            />
            <p className={`todo-text ${todo.checked ? "line-through" : ""}`}>
              {todo.text}
            </p>
          </div>
          <div>
            <button onClick={() => changeEdit(todo.text)}>編集</button>
            <button onClick={deleteTodo} style={{ backgroundColor: "red" }}>
              削除
            </button>
          </div>
        </>
      )}
    </li>
  );
};
