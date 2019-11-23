# Basics

Before we hop on React and implementation of our App, we need to have proper understanding how React works and why do we even need it.

For that we will stretch our hands and heat up our brain by completing following small exercises.

## 1. Basic TypeScript Hello World

How to make "Hello World" appear on the page with
HTML is quite easy:

```html
<html>
  <body>
    <div>Hello World</div>
  </body>
</html>
```

The browser takes this HTML code and generates
[the DOM (the Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
out of it. The browser then exposes the DOM to JavaScript so you can interact
with it to add a layer of interactivity to your web-page.

### 🙇‍♀️ Exercise

> It's important to have a basic understanding of how to generate and interact with DOM nodes using JavaScript because it will help you understand how React works under the hood a little better.
>
> In this exercise we're actually not going to use React at all. Instead we're going to use JavaScript to create a `div` DOM node with the text "Hello World" and insert that DOM node into the document.

1. go to `src/index.ts`
1. comment `// ReactDOM.render(<App />, document.getElementById('root'));`
1. Create a div (`document.createElement('div')`)
1. Set the div's `textContent` to 'Hello World' and className to 'container'
1. Append the div to the `root` div using `appendChild` (you need to query for that `root`)

## 2. Raw React APIs

React abstracts away the imperative browser API from you to give you a much more
declarative API to work with.

> Learn more about the difference between those two concepts here:
> [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/)

One important thing to know about React is that it supports multiple platforms
(for example, native and web). Each of these platforms has its own code
necessary for interacting with that platform, and then there's shared code
between the platforms.

With that in mind, you need two JavaScript modules to write React applications for
the web:

- `React`: responsible for creating react elements
- `ReactDOM`: responsible for render react elements to the DOM

### 🙇‍♀️ Exercise

Let's convert previous exercise to React!

You're going to use raw React APIs here.

raw API?

```ts
const elementType = 'h1';
const elementProps = { id: 'element-id', children: 'Hello world!' };
const reactElement = React.createElement(elementType, elementProps);
ReactDOM.render(reactElement, rootElement);
```

1. re-implement the regular document.createElement from previous step with raw React API calls

## 🤖 Extra Exercise

See if you can figure out how to write the JavaScript + React code to generate this DOM output:

```html
<div className="container">
  <h1><span>Hello</span> <span>World</span></h1>
</div>
```

## 3. JSX

JSX is more intuitive than the raw React API and is easier to understand when reading the code.

It's fairly simple HTML-like syntactic sugar on top of the raw

**React APIs:**

```jsx
const ui = <h1 id="greeting">Hey there</h1>;

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement('h1', { id: 'greeting', children: 'Hey there' });
```

Because JSX is not actually JavaScript, you have to convert it using something called a code compiler. Babel is one such tool.

### 🙇‍♀️ Exercise

1. re-implement previous step using JSX!
1. Note: (if you use JSX and TypeScript your file needs to have `.tsx` extension)

```ts
const element = React.createElement('div', {
  className: 'container',
  children: 'Hello World'
});
```

> **🎓 Learning materials**
>
> - https://reactjs.org/docs/jsx-in-depth.html

## 4. Creating custom components

Just like in regular JavaScript, you often want to share code which you do using functions. If you want to share JSX, you can do that as well.

In React we call these functions "components" and they have some special properties.

Components are basically functions which return something that is "renderable" (more React elements, strings, `null`, numbers, etc.).

**TIPS:**

- React component is just a function that returns JSX or `null`
- Custom React components need to start with Uppercase letter, so React can distinguish custom components and intrinsic platform components (div,section and so on)

1. Let's transform previous jsx markup to custom component. Let's call it `Greeter`
1. add `h1` tag as a child and render `Hello World` within that tag

## 5. Making custom component dynamic

It's nice to have some custom markup encapsulated within custom component.
What if somebody would like to re-use that component, but with different greeting text?

Because React component is just a function, we can configure it via parameters. In React, they are called `props` !

**TIPS:**

- Props is an object. In typescript you define object type like `{someNumber: number}`
- dynamic values are rendered via javascript expression -> `{myValue}

1. add props to our `Greeter` component
1. use those props within render
1. use your new component with different props

## Summary

Nice! all done. now remove what you've written and uncomment `// ReactDOM.render(<App />, document.getElementById('root'));`

With all new knowledge, we can finally start implementing our Todo App!

---

[🚀 Start implementing our App !](./4-app-component.md)
