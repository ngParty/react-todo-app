import showCommand from "./util/print-output";

export function shorthandPropertyNames() {
    console.log('\n=== shorthandPropertyNames ===');

    const a = 'hello';
    const b = 42;
    const c = { d: [true, false] };

    showCommand("console.log({ a, b, c });");
    console.log({ a, b, c });

    showCommand("console.log({ a: a, b: b, c: c });");
    console.log({ a: a, b: b, c: c });
}