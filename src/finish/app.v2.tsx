import React from 'react';

import { DarkModeToggle } from './shared';
import { TodoManager2 } from './todo-manager';

import './app.css';
import { Provider } from './http-client';

export const App = () => {
  return (
    <div className="container">
      <header className="row flex-center flex-edges">
        <h1>Todo Manager</h1>
        <DarkModeToggle />
      </header>

      <Provider endpoint="https://jsonplaceholder.typicode.com">
        <TodoManager2 />
      </Provider>
    </div>
  );
};
