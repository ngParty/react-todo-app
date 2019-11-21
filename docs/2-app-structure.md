# App Structure

Let's take a look at some important parts of our project (we won't cover every file/config file - but hey, if you're curious ask your mentor!)

```
todo-app/
  README.md       // project's readme
  node_modules/   // installed dependencies by npm/yarn
  package.json    // package configuration file
  tsconfig.js     // TypeScript configuration file
  public/
    index.html    // this is main entry point is served to your browser
    favicon.ico
  src/            // your code in here
    styles/       // folder for global styles -> we use browser normalization
    finish/       // finished application if you'll get lost!
    start/        // you'll put your code in this folder
      app.ts      // root App component
      app.test.ts // tests for root App component
      app.css     // App component styles
    index.css     // main global css definitions
    index.ts      // main app entrypoint
```

> [More info](https://create-react-app.dev/docs/folder-structure)

## 🙇‍♀️ Exercise

Go through those files and ask your mentor additional questions!

## 🤖 Extra Exercise

Understand how the app is bundled and served to the browser and why.

---

[🚀 Let's write some code !](./3-basic-exercise.md)
