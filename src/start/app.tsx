import React from 'react';
import { uuidv4 } from './shared';

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
    title: 'Learn Something done!'
  }
];

export const App = () => {
  return (
    <div className="container">
      <h1>Hello world!</h1>
    </div>
  );
};
