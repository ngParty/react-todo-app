import showCommand from "./util/print-output";

export function paramDefaults() {
    console.log('\n=== paramDefaults ===');

    function greet(title: string, greeting = 'Hello') {
        console.log(`${greeting} ;) ${title}!`)
    }

    showCommand("greet('React Girls');");
    greet('React Girls');

    showCommand("greet('React Girls', 'Have Fun');");
    greet('React Girls', 'Have Fun');

}