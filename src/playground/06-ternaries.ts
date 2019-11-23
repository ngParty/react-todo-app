import showCommand from "./util/print-output";

export function ternaries() {
    console.log('\n=== ternaries ===');

    showCommand([
        'const todo = { isDone: false, title: "Learn React" };',
        "const message = todo.isDone\n ? 'Task is done already!'\n : 'I have something todo here'",
        "console.log(message);"
    ]);
    const todo = { isDone: false, title: "Learn React" };
    const message = todo.isDone
    ? 'Task is done already!'
    : 'I have something todo here'
    console.log(message);

}