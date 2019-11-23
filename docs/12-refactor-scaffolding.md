# Polishing our app structure

### 🙇‍♀️ Exercise 1

We'll extract reusable components to separate files with co-located stylesheets

1. create button.tsx and implement `Button`
1. use `Button` instead of `button`
1. create input.tsx and implement `Input`
1. use `Input` instead of `input`

### 🙇‍♀️ Exercise 2

It's good practice to modularize our codebase by exposing only public API.

How to do it?

we can create so called "barrel" files -> `index.ts`, which will re-export only public api's from particular folder/module

1. implement barrel for `shared/`

### 🙇‍♀️ Exercise 3

Next good practice is to collocate related code logic to same module. In our case we have great candidate for that -> `TodoManager` and related components

1. create `todo-manager/` folder and add `index.ts`
1. move all todos logic components under this folder
1. extract todos logic from `App` to `TodoManager`
1. re-export `TodoManager` from barrel
1. refactor `App` to use only `TodoManager`
1. pass `initialState` to TodoManager -> implement props

Oh my goodness!!! This looks uber clean. Great Job! 🌻

---

We are at the end! Congratulations!

Do you have still time and energy? Awesome. Let's code a bit more!

_You've 2 options:_

---

- [🚀 write some tests for our app](./advanced/testing.md)
- [🚀 go deep into advanced workshop by implementing Server side CRUD and more!](./advanced/api-crud.md)
