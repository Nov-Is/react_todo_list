type AddTodo = {
  todoText: string;
  inputTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSaveTodo: () => void;
};

export const AddTodo = (props: AddTodo) => {
  const { todoText, inputTodo, onClickSaveTodo } = props;
  return (
    <div>
      <input
        type="text"
        value={todoText}
        placeholder="todoを入力"
        onChange={inputTodo}
      />
      <button
        onClick={() => onClickSaveTodo()}
        style={{ backgroundColor: "gray" }}
      >
        保存
      </button>
    </div>
  );
};
