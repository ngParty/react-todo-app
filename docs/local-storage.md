# Local Storage

> **📚You'll learn :**
>
> 1. Browser LocalStorage API
> 1. factory pattern
> 1. custom hook implementation
> 1. TypeScript: `as const`

---

We would like to persist the todo list on our computer, so that when accessing or reloading the app we'll see the list with the changes we've made. Ideally the list would be saved in a database, but we will implement a simple version using the browser's own storage.

### What is local storage?

Local storage, as its name implies, is a tool for storing data locally. Similar to cookies, local storage stores the data on the user's computer, and gives us, as developers, a quick way to access this data for both reading and writing.

> There are libraries you can use that give you a wider range, more generic, robust methods to manage the data in the local storage. Here we will implement a simple solution.

### Implementation 1:

```ts
const LocalStorage = <T>(dbName: string, initialValue: T) => {
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(dbName);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };
  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(dbName, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getValue,
    setValue
  };
};
```

Usage:

```tsx
export const App = () => {
  const localStorage = LocalStorage('todos', initialState);

  const [todos, setTodos] = useState(localStorage.getValue());

  const saveTodos = (todos: TodoModel[]) => {
    setTodos(todos);
    localStorage.setValue(todos);
  };
};
```

Quite a lot duplication in there!

### Implementation 2 - custom hook:

```ts
const useLocalStorage = <T>(dbName: string, initialValue: T) => {
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(dbName);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const setValue = (value: T) => {
    try {
      // Save state
      setStorageValue(value);
      // Save to local storage
      window.localStorage.setItem(dbName, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  // Pass initial state function to useState so logic is only executed once
  const [storageValue, setStorageValue] = useState(() => getValue());

  return [storageValue, setValue] as const;
};
```

```diff
export const App = () => {
- const localStorage = LocalStorage('todos', initialState);
- const [todos, setTodos] = useState(localStorage.getValue());
+ const [todos, setTodos] = useLocalStorage('todos', initialState);

- const saveTodos = (todos: TodoModel[]) => {
-    setTodos(todos);
-    localStorage.setValue(todos);
-};
  const handleAddTodo = (todo: TodoModel) => {
     const newTodos = [...todos, todo];
-    saveTodos(newTodos);
+    setTodos(newTodos);
  };
}
```
