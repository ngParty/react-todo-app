# Collapsible component

### 🙇‍♀️ Exercise

1. create new file `collapsible.tsx`
1. implement `Collapsible`

```tsx
const ToggleIcon = (props: { open?: boolean }) => {
  const { open } = props;
  return <span className={`toggle-icon ${open ? 'open' : ''}`}>&gt;</span>;
};

export const Collapsible = (props: {
  className?: string;
  title: React.ReactElement | React.ReactChild;
  children: React.ReactElement;
}) => {
  const { title, children, className } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`collapsible ${className}`}>
      <label
        onPointerDown={() => {
          setOpen((prev) => !prev);
        }}
      >
        <ToggleIcon open={isOpen} />
        {title}
      </label>
      <div className={`collapsible-body ${isOpen ? 'is-open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
```

1. collocate styles with component -> create `collapsible.css`
1. extract collapsible styles from `app.css` to `collapsible.css`
1. import `collapsible.css` to `collapsible.tsx`

1. use `Collapsible` within `App`
1. Define title that will render "Completed Items (COUNT)"
1. Implement proper pluralization of "Item"

---

[🚀 Implement dark mode](./10-dark-mode.md)
