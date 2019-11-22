export function main() {
  const rootElement = document.getElementById('root');
  const element = document.createElement('div');
  element.textContent = 'Hello World';
  element.className = 'container';

  if (rootElement) {
    rootElement.appendChild(element);
  }
}
