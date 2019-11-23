import showCommand from "./util/print-output";

export function destructuring() {
    console.log('\n=== destructuring ===');

    const todo = { isDone: false, title: "Learn React" };
    type Todo = typeof todo;

    showCommand([
        "const { isDone, title } = todo;",
        "console.log(isDone, title);"
    ]);
    const { isDone, title } = todo;
    console.log(isDone, title);

    const printTodo: (todo: Todo) => void = ({ isDone, title }) => {
    // print isDone and title
    };

    showCommand([
        "const { isDone: isTodoDone, title: todoTitle } = todo;",
        "console.log(isTodoDone, todoTitle);"
    ])
    const { isDone: isTodoDone, title: todoTitle } = todo;
    console.log(isTodoDone, todoTitle);



}