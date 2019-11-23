import showCommand from "./util/print-output";

export function literals() {
    console.log('\n=== literals ===');

    const greeting = 'Hello'
    const title = 'React Girls'
    showCommand("console.log('`${greeting} ;) ${title}!`', `${greeting} ;) ${title}!`);");
    console.log('`${greeting} ;) ${title}!`', `${greeting} ;) ${title}!`);

    showCommand("console.log(greeting + ' ;) ' + title + '!');");
    console.log(greeting + ' ;) ' + title + '!');

}