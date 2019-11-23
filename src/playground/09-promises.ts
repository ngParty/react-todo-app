import showCommand from "./util/print-output";

export function promises() {
    console.log('\n=== promises ===');

    showCommand([
        'const pastTimePromise = new Promise<string>((resolve, reject) => {\n' +
        '    const date = new Date();\n' +
        '    setTimeout(() => resolve(date.toString()), 1000);\n' +
        '});',
        'pastTimePromise.then(pasteTime => {\n' +
        '    const nowDate = new Date().toString();\n' +
        '    console.log(`${pasteTime} ${nowDate}`);\n' +
        '});'
    ]);
    const pastTimePromise = new Promise<string>((resolve, reject) => {
        const date = new Date();
        setTimeout(() => resolve(date.toString()), 1000);
    });
    const waitFor = pastTimePromise.then(pasteTime => {
        const nowDate = new Date().toString();
        console.log(`${pasteTime} ${nowDate}`);
    });

    waitFor.then(() => {
        showCommand([
            "const failedPromise = new Promise<string>((resolve, reject) => reject('SomeError'));",
            "failedPromise\n" +
            "        .then(() => console.log('success'))\n" +
            "        .catch((err) => console.error(`Error occurred ${err}`))"
        ]);
        const failedPromise = new Promise<string>((resolve, reject) => reject('SomeError'));
        failedPromise
            .then(() => console.log('success'))
            .catch((err) => console.error(`Error occurred ${err}`));
    });
}