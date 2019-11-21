# React Context

> **📚You'll learn :**
>
> 1. fetch API
> 1. Service Architecture
> 1. React context
> 1. useContext hook
> 1. creating custom hook

---

> **🎓 Learning materials**
>
> 1. [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)
> 1. [https://reactjs.org/docs/hooks-reference.html#usecontext](https://reactjs.org/docs/hooks-reference.html#usecontext)

---

### Implement http-client module

### Create Context

### Create Service

### Create Custom Provider

### Create Custom Hook

### Use Provider

```tsx
import { Provider } from './http-client';

export const App = () => {
  return (
    <div className="container">
      <Provider endpoint="https://jsonplaceholder.typicode.com">
        <TodoManager initialState={initialState} />
      </Provider>
    </div>
  );
};
```

### Use our custom Hook
