# Dark Mode

> **📚You'll learn :**
>
> 1. CSS Variables
> 1. useEffect hook

---

So before we'll implement this we need to extract our checkbox markup to custom component so we will be able to reuse it for DarkMode component

### 🙇‍♀️ Exercise

1. create `checkbox.tsx` and encapsulate here markup and behaviour from todo checkbox
1. extract css from `app.css` for this component

```tsx
import './checkbox.css';

export const CheckBox = (props: {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactElement | React.ReactChild;
}) => {
  const { checked, children, onChange } = props;

  return (
    <label className="paper-check">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
};
```

With that we're ready to implement our dark mode component!

### 🙇‍♀️ Exercise

1. explore `app.css` html and body selectors -> css variables
1. to create dark mode, we'll leverage already defined `.dark-mode` class that defines dark colors for our theme.
1. create dark-mode-toggle.tsx
1. implement `DarkModeToggle`

```tsx
export const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  const handleSetEnabled = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEnabled(!enabled);
  };

  return (
    <div>
      <CheckBox checked={enabled} onChange={handleSetEnabled}>
        {enabled ? '🌒' : '☀️'}
      </CheckBox>
    </div>
  );
};
```

1. use our component within app

```tsx
<header className="row flex-center flex-edges">
  <h1>Todo Manager</h1>
  <DarkModeToggle />
</header>
```

Now if you click on that toggle, symbols are changing but not our color palette.

We need to introduce `useEffect` hook.

```tsx
// Fire off effect that add/removes dark mode class
useEffect(
  () => {
    const className = 'dark-mode';
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
      return;
    }
    element.classList.remove(className);
  },
  // Only re-call effect when value changes
  [enabled]
);
```

---

[🚀 Implement Local Storage persistance](./11-local-storage.md)
