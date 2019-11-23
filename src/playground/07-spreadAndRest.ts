import showCommand from "./util/print-output";

export function spreadAndRest() {
    console.log('\n=== spreadAndRest ===');

    showCommand([
        "const arr = [5, 6, 8, 4, 9];",
        "console.log(Math.max(...arr));"
    ]);
    const arr = [5, 6, 8, 4, 9];
    console.log(Math.max(...arr));

    showCommand([
        "const obj1 = {\n" +
        "    a: 'a from obj1',\n" +
        "    b: 'b from obj1'\n" +
        "};",
        "const obj2 = {\n" +
        "    b: 'b from obj2',\n" +
        "    c: 'c from obj2'\n" +
        "};",
        "console.log({...obj1, ...obj2});"
    ]);
    const obj1 = {
        a: 'a from obj1',
        b: 'b from obj1'
    };
    const obj2 = {
        b: 'b from obj2',
        c: 'c from obj2'
    };
    console.log({...obj1, ...obj2});

    showCommand([
        "const todos = [\n" +
        "    { isDone: false, title: 'Learn React' },\n" +
        "    { isDone: false, title: 'Learn JavaScript' },\n" +
        "    { isDone: false, title: 'Learn TypeScript' }\n" +
        "];",
        "const [firstTodo, ...restofTodos] = todos;",
        "console.log(firstTodo);",
        "console.log(restofTodos);"
    ]);
    const todos = [
        { isDone: false, title: 'Learn React' },
        { isDone: false, title: 'Learn JavaScript' },
        { isDone: false, title: 'Learn TypeScript' }
    ];
    
    const [firstTodo, ...restofTodos] = todos;
    
    console.log(firstTodo);
    console.log(restofTodos);
       
}