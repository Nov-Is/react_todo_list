import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/molecules/AddTodo";
import { TodoList } from "./components/organisms/TodoList";
import type { Todo } from "./components/types/Todo";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);
  const [editingItems, setEditingItems] = useState<{[id: number]: string}>({});
  const [count, setCount] = useState<number>(0);

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const updateTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setEditingItems({...editingItems, [id]:e.target.value});
  };

  const onClickSaveTodo = () => {
    const newTodo = {
      id: count,
      text: todoText,
      checked: false,
      isEditing: false,
    };

    setCount(count + 1);
    setTodoArray([...todoArray, newTodo]);
    setTodoText("");
  };

  const changeCheckbox = (id: number) => {
    const handleCheckbox = todoArray.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodoArray(handleCheckbox);
  };

  const changeEdit = (id: number) => {
    const handleEdit = todoArray.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodoArray(handleEdit);
    if (!editingItems[id]) {
      setEditingItems({...editingItems, [id]: todoText})
    }
  };

  const updateTodoName = (id: number, newTodo: string) => {
    const editedTodoList = todoArray.map((todo) =>
      todo.id === id
        ? { ...todo, text: newTodo, isEditing: false }
        : todo
    );
    setTodoArray(editedTodoList);
  };

  const deleteTodo = (index: number) => {
    const confirm = window.confirm("本当に削除してもよろしいですか？");
    if (!confirm) return
    const newTodos = [...todoArray];
    newTodos.splice(index, 1);
    setTodoArray(newTodos);
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>
      <AddTodo
        todoText={todoText}
        inputTodo={inputTodo}
        onClickSaveTodo={onClickSaveTodo}
      />
      <TodoList
        todoArray={todoArray}
        editingItems={editingItems}
        updateTodo={updateTodo}
        changeCheckbox={changeCheckbox}
        updateTodoName={updateTodoName}
        changeEdit={changeEdit}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
