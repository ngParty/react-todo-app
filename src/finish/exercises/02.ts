import React from 'react';
import ReactDOM from 'react-dom';

export function main() {
  const rootElement = document.getElementById('root');

  const element = React.createElement('div', {
    className: 'container',
    children: 'Hello World'
  });

  if (rootElement) {
    ReactDOM.render(element, rootElement);
  }
}

function mainExtra() {
  const rootElement = document.getElementById('root');

  const element = React.createElement('div', {
    className: 'container',
    children: [
      React.createElement('h1', {
        children: [
          React.createElement('span', { children: 'Hello' }),
          ' ',
          React.createElement('span', { children: 'World' })
        ]
      })
    ]
  });

  if (rootElement) {
    ReactDOM.render(element, rootElement);
  }
}
