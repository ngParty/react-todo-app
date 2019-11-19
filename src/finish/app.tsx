import React from 'react';

import { uuidv4, DarkModeToggle } from './shared';
import { TodoManager } from './todo-manager';

import './app.css';

const initialState = [
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn React'
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn JavaScript'
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn TypeScript'
  },
  {
    id: uuidv4(),
    completed: true,
    title: 'Come to the workshop!'
  }
];

export const App = () => {
  return (
    <div className="container">
      <header className="row flex-center flex-edges">
        <h1>Todo Manager</h1>
        <DarkModeToggle />
      </header>

      <TodoManager initialState={initialState} />
    </div>
  );
};
