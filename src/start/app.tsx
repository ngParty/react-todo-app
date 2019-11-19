import React from 'react';
import { uuidv4 } from './shared';

import './app.css';

const initialState = [
  {
    id: uuidv4(),
    complete: false,
    text: 'Learn React'
  },
  {
    id: uuidv4(),
    complete: false,
    text: 'Learn JavaScript'
  },
  {
    id: uuidv4(),
    complete: false,
    text: 'Learn TypeScript'
  },
  {
    id: uuidv4(),
    complete: true,
    text: 'Learn Something done!'
  }
];

export const App = () => {
  return (
    <div className="container">
      <h1>Hello world!</h1>
    </div>
  );
};
