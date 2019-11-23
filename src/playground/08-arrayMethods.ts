import showCommand from "./util/print-output";

export function arrayMethods() {
    console.log('\n=== arrayMethods ===');

    showCommand([
        "const todos = [\n" +
        "    { isDone: false, title: 'Learn React' },\n" +
        "    { isDone: false, title: 'Learn JavaScript' },\n" +
        "    { isDone: false, title: 'Learn TypeScript' }\n" +
        "];",
    ]);
    const todos = [
        { isDone: false, title: 'Learn React', requirements: ['notebook', 'tutorial'] },
        { isDone: false, title: 'Learn TypeScript', requirements: ['notebook', 'tutorial'] },
        { isDone: true, title: 'Go out', requirements: ['boots', 'coat'] }
    ];
    
    showCommand("todos.find(todo => todo.isDone)");
    console.log(
        todos.find(todo => todo.isDone)
    );

    showCommand("todos.some(todo => todo.requirements.includes('candy'))");
    console.log(
        todos.some(todo => todo.requirements.includes('candy'))
    );

    showCommand("todos.some(todo => todo.requirements.includes('notebook'))");
    console.log(
        todos.some(todo => todo.requirements.includes('notebook'))
    );

    showCommand("todos.map(todo => todo.title)");
    console.log(
        todos.map(todo => todo.title)
    );

    showCommand("todos\n" +
        " .filter(todo => !todo.isDone)\n" +
        " .map(todo => todo.title)");
    console.log(
        todos
        .filter(todo => !todo.isDone)
        .map(todo => todo.title)
    );

}