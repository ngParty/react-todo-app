import React, { useEffect, useState } from 'react';

import { Collapsible, Debug, pluralize } from '../shared';
import { useHttpClient } from '../http-client';

import { TodoModel } from './todo.model';
import { AddTodo } from './add-todo';
import { TodoItem } from './todo-item';

export const TodoManager = () => {
  const httpClient = useHttpClient();
  const [todos, setTodos] = useState([] as TodoModel[]);

  const handleAddTodo = (todo: TodoModel) => {
    const { id, ...restTodo } = todo;
    httpClient
      .post<{ id?: string; userId: string; title: string; completed: boolean }>(
        'todos',
        {
          ...restTodo,
          userId: '1'
        }
      )
      .then(({ userId, ...newTodo }) => {
        const newTodos = [...todos, newTodo as TodoModel];
        setTodos(newTodos);
        console.log(`Created Todo: ${JSON.stringify(newTodo, null, 2)}`);
      });
  };

  const handleRemoveTodo = (todo: TodoModel) => {
    httpClient.remove(`todos/${todo.id}`).then(() => {
      const newTodos = todos.filter((todoItem) => todoItem !== todo);
      setTodos(newTodos);
      console.log(`${todo.id} was removed!`);
    });
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
    setTodos(newTodos);

    // @TODO - debounce needed
    httpClient
      .put(`todos/${todo.id}`, { userId: 1, ...todo })
      .then(({ userId, ...newTodo }) => {
        console.log(`${todo.id} was updated!`);
      });
  };

  const getComplete = (todos: TodoModel[]) => {
    return todos.filter((todo) => todo.completed);
  };

  const completedTodos = getComplete(todos);

  useEffect(() => {
    httpClient.get<TodoModel[]>('todos?userId=1').then((data) => {
      setTodos(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [httpClient]);

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
