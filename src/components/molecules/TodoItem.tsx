import type { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  editingItems: { [id: number]: string };
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  changeCheckbox: (id: number) => void;
  changeEdit: (id: number) => void;
  updateTodoName: (id: number, newTodo: string) => void;
  deleteTodo: () => void;
};

export const TodoItem = (props: Props) => {
  const {
    todo,
    editingItems,
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
              onChange={() => changeCheckbox(todo.id)}
            />
            <input
              type="text"
              value={editingItems[todo.id] || todo.text}
              onChange={(e) => updateTodo(e, todo.id)}
            />
          </div>
          <div>
            <button
              onClick={() => updateTodoName(todo.id, editingItems[todo.id] || todo.text)}
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
              onChange={() => changeCheckbox(todo.id)}
            />
            <p className={`todo-text ${todo.checked ? "line-through" : ""}`}>
              {todo.text}
            </p>
          </div>
          <div>
            <button onClick={() => changeEdit(todo.id)}>編集</button>
            <button onClick={deleteTodo} style={{ backgroundColor: "red" }}>
              削除
            </button>
          </div>
        </>
      )}
    </li>
  );
};
