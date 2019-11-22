# App Component

From now on we will focus on `src/app.tsx` file, where we'll implement most of the things for our app.

We have already some code within our `app.tsx`. Let's explore a bit.

```tsx
// custom helper to generate unique ID for our TODOS
import { uuidv4 } from './shared';
```

```tsx
// we're importing our app.css that consist all of our css definitions that we gonna leverage
import './app.css';
```

```tsx
// our initial data set of our TODOS. we'll use this later
const initialState = [{...}]
```

### 🙇‍♀️ Exercise

1. log into console `initialState`
1. wrap `h1` within `header` tag and add to it `row flex-center flex-edges` css classes
1. rename h1 children to `Todo Manager`

---

Almost done. We need to introduce state to our application by leveraging our `initialState`.

In React we register stat via `useState` hook.

### 🙇‍♀️ Exercise

1. learn about `useState`
1. use `useState` and pass it `initialState` reference

You should implemented something like following:

```tsx
import { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState(initialState);

  console.log(todos);
};
```

One last touch!

### 🙇‍♀️ Exercise

1. add `section` tag as `header` sibling and add to it `paper` css class

Our app template should look like following:

```tsx
<div className="container">
  <header className="row flex-center flex-edges">
    <h1>Hello world!</h1>
  </header>
  <section className="paper">add todo needed!</section>
</div>
```

We are done here. good job! Now, let's implement custom component for adding new todo!

---

[🚀 Adding new Todo](./5-add-todo.md)
