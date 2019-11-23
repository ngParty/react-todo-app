# Todo Item

In previous step, we implemented rendering of our complete and un-complete todo lists.

Now the time has come to render every todo with proper View/markup and interaction.

- Toggling,
- Clicking on `X` button
- Editing todo title

All of these are pre-requisites to our CRUD state handling that's gonna be implemented in next step.

### 🙇‍♀️ Exercise 1

1. create `TodoItem` component
1. define props `{item: TodoModel}`

**checkbox markup**

```tsx
<label className="paper-check">
  <input type="checkbox" checked={false} onChange={(ev) => {}} />
  <span />
</label>
```

**input markup**

```tsx
<input
  className={`input col-fill ${item.completed ? 'text-strike' : ''}`}
  value={''}
  onChange={(ev) => {}}
/>
```

_Additional Learning:_

What is that `input col-fill ${item.completed ? 'text-strike' : ''}` within the className? ASK YOUR MENTOR if you're curios. 😊

**button markup**

```tsx
<button className="btn" onClick={(ev) => {}}>
  x
</button>
```

### 🙇‍♀️ Exercise 2

1. implement `handleComplete`,
1. implement `handleChange`
1. implement `handleRemove`
   > **NOTE:** All of those should create new immutable Todo and console log result.

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

### 🙇‍♀️ Exercise 3

1. replace raw output within list with our new `TodoItem`

```diff
- <li key={todo.id}>{todo.title}</li>;
+ <li key={todo.id}><TodoItem item={todo} /></li>
```

### 🙇‍♀️ Exercise 4

1. extend `TodoItem` props by propagating data up to parent

```ts
{
  onComplete: (todo: TodoModel) => void;
  onChange: (todo: TodoModel) => void;
  onRemove: (todo: TodoModel) => void;
}
```

1. call those prop function within `TodoItem` handlers
1. implement dummy handlers within `App` and use them for `TodoItem` props

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

Check your console if you see all data when executing particular action on our newly created `TodoItem` - (toggle,update title, clicking X button)

---

[🚀 Implement complete CRUD](./8-complete-crud.md)
