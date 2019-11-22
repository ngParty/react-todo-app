# Todo Item

Previously we implemented rendering of our todo lists.

Now the time has come to render every todo with proper component and add interaction to it.

### 🙇‍♀️ Exercise

1. create `TodoItem` component
1. define props `{item: TodoModel}`

**checkbox markup**

```tsx
<label className="paper-check">
  <input type="checkbox" checked={} onChange={} />
  <span />
</label>
```

**input markup**

```tsx
<input
  value={}
  className={`input col-fill ${item.completed ? 'text-strike' : ''}`}
  onChange={}
/>
```

**button markup**

```tsx
<button className="btn" onClick={}>
  x
</button>
```

1. now implement handlers `handleComplete`,`handleChange`,`handleRemove`. All of those should create new immutable Todo and console log that.

```tsx
const TodoItem = (props: { item: TodoModel }) => {
  const { item } = props;

  const handleComplete = () => {};
  const handleChange = () => {};
  const handleRemove = () => {};

  return (
    <div className="row flex-center">
      <label className="paper-check">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleComplete}
        />
        <span />
      </label>
      <input
        value={item.title}
        className={`input col-fill ${item.completed ? 'text-strike' : ''}`}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleRemove}>
        x
      </button>
    </div>
  );
};
```

1. replace raw output within list with our new `TodoItem`

```diff
- <li key={todo.id}>{todo.title}</li>;
+ <li key={todo.id}><TodoItem item={todo} /></li>
```

1. extend props by propagating data up to parent

```ts
{
  onComplete: (todo: TodoModel) => void;
  onChange: (todo: TodoModel) => void;
  onRemove: (todo: TodoModel) => void;
}
```

1. call those props within handlers
1. implement dummy handlers within `App` and use them on `TodoItem`

```tsx
// App component
const handleRemoveTodo = (todo: TodoModel) => {
  console.log(todo);
};

const handleCompleteTodo = (todo: TodoModel) => {
  console.log(todo);
};

const handleTextChangeTodo = (todo: TodoModel) => {
  console.log(todo);
};
```

---

[🚀 Implement complete CRUD](./8-compete-crud.md)
