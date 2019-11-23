# Dark Mode

> **📚You'll learn :**
>
> 1. CSS Variables
> 1. useEffect hook

---

So before we'll implement this we need to extract our checkbox markup to custom component so we will be able to reuse it for DarkMode component

### 🙇‍♀️ Exercise 1

1. create `checkbox.tsx` and encapsulate here markup and behaviour from todo checkbox
1. implement `Checkbox` component
1. extract css from `app.css` to this component collocated `checkbox.css`

**TIP**

What about Checkbox props ?:

```ts
{
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactElement | React.ReactChild;
}
```

> _Ask your mentor for more info!_
>
> - Why is children optional ?
> - Why `React.ReactElement | React.ReactChild` is used for children ?

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

### 🙇‍♀️ Exercise 2

1. explore `app.css` html and body selectors
1. Learn about [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (ASK YOUR MENTOR)
1. to create dark mode, we'll leverage already defined `.dark-mode` class that defines dark color palette for our theme.
1. create `dark-mode-toggle.tsx` file
1. implement `DarkModeToggle` component

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

1. use our component within app `header`

```tsx
<header className="row flex-center flex-edges">
  <h1>Todo Manager</h1>
  <DarkModeToggle />
</header>
```

### 🙇‍♀️ Exercise 3

Now if you click on that toggle, symbols are changing but not our color palette.

We need to introduce [useEffect](https://reactjs.org/docs/hooks-effect.html) hook.

1. use `useEffect`
1. toggle document.body css class to `dark-mode` if it's enabled!

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
