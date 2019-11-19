import React from 'react';

import { Collapsible, Debug, pluralize, useLocalStorage } from '../shared';

import { TodoModel } from './todo.model';
import { AddTodo } from './add-todo';
import { TodoItem } from './todo-item';

export const TodoManager = (props: { initialState: TodoModel[] }) => {
  const { initialState } = props;
  const [todos, setTodos] = useLocalStorage('todos', initialState);

  // const saveTodos = (todos: TodoModel[]) => {
  //   setTodos(todos);
  //   // localStorage.setValue(todos);
  // };

  const handleAddTodo = (todo: TodoModel) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    // saveTodos(newTodos);
  };

  const handleRemoveTodo = (todo: TodoModel) => {
    const newTodos = todos.filter((todoItem) => todoItem !== todo);
    setTodos(newTodos);
    // saveTodos(newTodos);
  };

  const handleCompleteTodo = (todo: TodoModel) => {
    updateTodo(todo);
  };

  const handleTextChangeTodo = (todo: TodoModel) => {
    updateTodo(todo);
  };

  const updateTodo = (todo: TodoModel) => {
    const newTodos = todos.map((current) => {
      if (current.id === todo.id) {
        return todo;
      }
      return current;
    });

    // saveTodos(newTodos);
    setTodos(newTodos);
  };

  const getComplete = (todos: TodoModel[]) => {
    return todos.filter((todo) => todo.completed);
  };

  const completedTodos = getComplete(todos);

  return (
    <section className="paper">
      <AddTodo onAdd={handleAddTodo} />
      <div className="section">
        <ul>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <TodoItem
                    item={todo}
                    onChange={handleTextChangeTodo}
                    onComplete={handleCompleteTodo}
                    onRemove={handleRemoveTodo}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      {completedTodos.length ? (
        <Collapsible
          className="background-muted"
          title={<CompletedTitle count={completedTodos.length} />}
        >
          <ul>
            {completedTodos.map((todo) => {
              return (
                <li key={todo.id}>
                  <TodoItem
                    item={todo}
                    onChange={handleTextChangeTodo}
                    onComplete={handleCompleteTodo}
                    onRemove={handleRemoveTodo}
                  />
                </li>
              );
            })}
          </ul>
        </Collapsible>
      ) : null}

      <Collapsible title="Debug">
        <Debug>{todos}</Debug>
      </Collapsible>
    </section>
  );
};

const CompletedTitle = (props: { count: number }) => {
  const { count } = props;

  return (
    <>
      {count} Completed {pluralize({ word: 'Item', count })}
    </>
  );
};
