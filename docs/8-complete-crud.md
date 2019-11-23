# CRUD logic

In this chapter we'll implement our root state CRUD operations:

- todo title update
- completed toggle
- removal of todo

### 🙇‍♀️ Exercise 1

1. learn about immutable removal of objects from array -> apply within `handleRemoveTodo`
1. learn about immutable changing object within an array -> apply within `handleCompleteTodo`, `handleTextChangeTodo` implementation

```tsx
// app.tsx
const handleAddTodo = (todo: TodoModel) => {
  const newTodos = [...todos, todo];
  setTodos(newTodos);
};

const handleRemoveTodo = (todo: TodoModel) => {
  const newTodos = todos.filter((todoItem) => todoItem !== todo);
  setTodos(newTodos);
};

const handleCompleteTodo = (todo: TodoModel) => {
  const newTodos = todos.map((current) => {
    if (current.id === todo.id) {
      return todo;
    }
    return current;
  });

  setTodos(newTodos);
};

const handleTextChangeTodo = (todo: TodoModel) => {
  const newTodos = todos.map((current) => {
    if (current.id === todo.id) {
      return todo;
    }
    return current;
  });

  setTodos(newTodos);
};
```

1. let's clean our code a bit by encapsulating following code (used within handleCompleteTodo and handleTextChangeTodo):

```ts
// Duplicated CODE!
const newTodos = todos.map((current) => {
  if (current.id === todo.id) {
    return todo;
  }
  return current;
});

setTodos(newTodos);
```

1. use our CRUD handlers used on `TodoItem`

```tsx
<TodoItem
  item={todo}
  onChange={handleTextChangeTodo}
  onComplete={handleCompleteTodo}
  onRemove={handleRemoveTodo}
/>
```

---

[🚀 Implement collapsible component](./9-collapsible-component.md)
