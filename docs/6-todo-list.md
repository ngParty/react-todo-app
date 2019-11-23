# Todo List

In this chapter, we'll make our todos visible in the app.

> **📚You'll learn :**
>
> 1. rendering lists in react
> 1. using various Array methods

### 🙇‍♀️ Exercise 1

1. create div with `section` className as a wrapper for rendering our list
1. learn about rendering lists in react ([Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))
1. render out our raw Todos via unsorted list tag (`ul`)

```tsx
<div className="section">
  <ul>
    {todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    })}
  </ul>
</div>
```

Done!

### 🙇‍♀️ Exercise 2

Well, not so fast! We need to render 2 lists 😅:

- one with completed todos
- one with not completed todos

Not completed will be rendered first.

1. learn about immutable filtering via [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
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

1. add new todo via our `AddInput` form, to check if everything works

Cool stuff. We're done here 👌.

---

[🚀 Implement Todo Item](./7-todo-item.md)
