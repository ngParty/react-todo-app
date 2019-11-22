# Add Todo

### 🙇‍♀️ Exercise

1. create `AddTodo` component
1. Use it within `App`
1. implement add todo markup

```tsx
<form className="section">
  <input type="text" className="input" placeholder="What needs to be done?" />
</form>
```

3. Now try to write something and press enter. What happened ?

---

Well as you've noticed, the browser was reloaded. That's not very app-y feeling right? But hey that's standard browser behaviour when we are inside `<form>` tag and press enter. Ok let's fix this.

For that we will need to introduce new concept. Handling DOM events with React.

In raw javascript, we do it like following:

```js
const buttonRef = document.querySelector('button');
formRef.addEventListener('click', (ev) => {
  ev.preventDefault();
});
```

Very imperative code indeed...

Well React is declarative all the way, so this is how you register event listener on DOM element:

```tsx
<button onClick={(ev)=>{}}>
```

So every DOM event, can be registered via `on` + `EventName`.

### 🙇‍♀️ Exercise

1. register `submit` handler on form and prevent page reload on enter

---

Now we need to process and store that input value somewhere right?

We have 2 approaches how to handle form data in React

- controlled
- uncontrolled

For this component, let's use uncontrolled approach.

### 🙇‍♀️ Exercise

1. learn about `useRef` and `ref` prop
1. create `inputRef` to reference input node element `const inputRef = useRef<HTMLInputElement>(null);`
1. register `inputRef` on `input` via `ref`
1. console log current input value on form submit

```ts
if (inputRef.current) {
  console.log(inputRef.current.value);
}
```

1. propagate that value up -> we need to define props

> **NOTE:**
>
> When creating custom "event" handlers, those are quite different than DOM events. In React case, those are just functions. So we need to define regular props, just to follow best practices, props that should be used as events are prefixed by `on`.
>
> So, in our case it's gonna be `(props:{onAdd: ()=>void})`

```tsx
const AddTodo = (props: { onAdd: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="section"
      onSubmit={(ev) => {
        ev.preventDefault();
        if (inputRef.current) {
          console.log(inputRef.current.value);
          props.onAdd();
        }
      }}
    ></form>
  );
};
```

Now by defining those props, we'll have compile error. Because TypeScript knows we're doing something wrong.

1. define `onAdd` handler on <AddTodo>
1. clean input value after submit

```tsx
if (inputRef.current) {
  console.log(inputRef.current.value);
  props.onAdd();

  inputRef.current.value = '';
}
```

Ok everything works, it seems, except it doesn't haha.

We need to propagate some data up via our `onAdd` props. In our case, we wanna create new Todo object and pass it up to the parent.

1. create `todo.model.ts`
1. let's define interface of our model
1. create factory to create Todo object

```ts
export interface TodoModel {
  id: string;
  title: string;
  completed: boolean;
}

export const createTodo = (title: string): TodoModel => {
  return {
    id: uuidv4(),
    title,
    completed: false
  };
};
```

Now let's hop back to to `AddTodo` and tweak our submit handler

1. create new todo object within `onSubmit` handler and propagate it upward by calling prop.onAdd
1. process that todo within `App` and console log it

```tsx
// add-todo.tsx
const AddTodo = (props: { onAdd: (todo: TodoModel) => void }) => {
  return (
    <form
      className="section"
      onSubmit={(ev) => {
        ev.preventDefault();
        if (inputRef.current) {
          const newTodo = createTodo(inputRef.current.value);
          props.onAdd(newTodo);
          inputRef.current.value = '';
        }
      }}
    ></form>
  );
};
```

```tsx
// app.tsx
<AddTodo
  onAdd={(todo) => {
    console.log(todo);
  }}
/>
```

Last task in this chapter awaits!

We need to update our state with this new todo!

1. implement `handleAddTodo` function within app
1. learn about immutability in javascript
1. use `handleAddTodo` as `onAdd` callback

```tsx
const handleAddTodo = (todo: TodoModel) => {
  const newTodos = [...todos, todo];
  setTodos(newTodos);
};
```

```tsx
<AddTodo onAdd={handleAddTodo} />
```

Now you should see new item logged out in console!

---

[🚀 Render our Todos](./6-todo-list.md)
