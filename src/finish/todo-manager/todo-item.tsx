import React from 'react';
import { CheckBox } from '../shared/checkbox';
import { Button } from '../shared/button';
import { TodoModel } from './todo.model';
import { TextField } from '../shared/text-field';

export const TodoItem = (props: {
  item: TodoModel;
  onComplete: (todo: TodoModel) => void;
  onChange: (todo: TodoModel) => void;
  onRemove: (todo: TodoModel) => void;
}) => {
  const { item, onChange, onComplete, onRemove } = props;
  const handleComplete = () => {
    onComplete({ ...item, completed: !item.completed });
  };
  const handleRemove = () => {
    onRemove(item);
  };
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    onChange({ ...item, title: value });
  };

  return (
    <div className="row flex-center">
      <CheckBox onChange={handleComplete} checked={item.completed} />
      <TextField
        value={item.title}
        onChange={handleChange}
        className={`col-fill ${item.completed ? 'text-strike' : ''}`}
      />
      <Button onClick={handleRemove}>x</Button>
    </div>
  );
};
