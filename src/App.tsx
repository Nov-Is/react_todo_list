import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/molecules/AddTodo";
import { TodoList } from "./components/organisms/TodoList";
import type { Todo } from "./components/types/Todo";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);
  const [todoUpdateText, setTodoUpdateText] = useState("");

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const updateTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoUpdateText(e.target.value);
  };

  const onClickSaveTodo = (todo: string) => {
    const newTodo = {
      text: todo,
      checked: false,
      isEditing: false,
    };

    setTodoArray([...todoArray, newTodo]);
    setTodoText("");
  };

  const changeCheckbox = (todoText: string) => {
    const handleCheckbox = todoArray.map((todo) =>
      todo.text === todoText ? { ...todo, checked: !todo.checked } : todo
    );
    setTodoArray(handleCheckbox);
  };

  const changeEdit = (todoText: string) => {
    const handleEdit = todoArray.map((todo) =>
      todo.text === todoText ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodoArray(handleEdit);
    setTodoUpdateText(todoText);
  };

  const updateTodoName = (todoText: string, newTodo: string) => {
    const editedTodoList = todoArray.map((todo) =>
      todo.text === todoText
        ? { ...todo, text: newTodo, isEditing: false }
        : todo
    );
    setTodoArray(editedTodoList);
  };

  const deleteTodo = (index: number) => {
    const confirm = window.confirm("本当に削除してもよろしいですか？");
    if (confirm) {
      const newTodos = [...todoArray];
      newTodos.splice(index, 1);
      setTodoArray(newTodos);
    }
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
        todoUpdateText={todoUpdateText}
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
