# CRUD logic

In this chapter we'll implement todo title update, completed toggle and removal of todo.

### 🙇‍♀️ Exercise

1. learn about immutable removal of objects from array -> apply `handleRemoveTodo`
1. learn about immutable changing object within an array -> apply handleCompleteTodo,handleTextChangeTodo

```tsx
const handleAddTodo = (todo: TodoModel) => {
  const newTodos = [...todos, todo];
  setTodos(newTodos);
};

const handleRemoveTodo = (todo: TodoModel) => {
  const newTodos = todos.filter((todoItem) => todoItem !== todo);
  setTodos(newTodos);
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
};
```

handlers used on `TodoItem`

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
