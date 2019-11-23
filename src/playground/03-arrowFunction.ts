import showCommand from "./util/print-output";

export function arrowFuntion() {
    console.log('\n=== arrowFuntion ===');

    const getFive = () => 5

    const addFive: (a: number) => number = a => a + 5

    const divide = (a: number, b: number) => a / b

    showCommand('console.log(getFive());');
    console.log(getFive());

    showCommand('console.log(addFive(1));');
    console.log(addFive(1));

    showCommand('console.log(divide(10, 2));');
    console.log(divide(10, 2));

}