import React, { useRef } from 'react';
import { TodoModel, createTodo } from './todo.model';

export const AddTodo = (props: { onAdd: (todo: TodoModel) => void }) => {
  const { onAdd } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (inputRef.current) {
      onAdd(createTodo(inputRef.current.value));
      inputRef.current.value = '';
    }
  };

  const handleEsc = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const { keyCode } = ev;
    const ESC_KEY_CODE = 27;
    if (inputRef.current && keyCode === ESC_KEY_CODE) {
      inputRef.current.value = '';
    }
  };

  return (
    <form className="section" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="input"
        placeholder="What needs to be done?"
        defaultValue=""
        onKeyDown={handleEsc}
      />
    </form>
  );
};
