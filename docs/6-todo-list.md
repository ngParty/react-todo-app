# Todo List

### 🙇‍♀️ Exercise

1. create div with `section` className as a wrapper for rendering our list
1. learn about rendering lists in react (Array.map)
1. render out our raw Todos via unsorted list

```tsx
<div className="section">
  <ul>
    {todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    })}
  </ul>
</div>
```

We need to render 2 lists, one with completed todos and one with not completed.

Not completed will be first.

1. learn about immutable filtering via `Array.filter`
1. render 2 lists

```tsx
<div className="section">
  <ul>
    {todos
      .filter((todo) => !todo.completed)
      .map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
  </ul>

  <ul>
    {todos
      .filter((todo) => todo.completed)
      .map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
  </ul>
</div>
```

1. make code cleaner
1. add new todo to check if everything works

---

[🚀 Implement Todo Item](./7-todo-item.md)
