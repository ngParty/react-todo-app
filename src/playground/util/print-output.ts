export default function showCommand(cmd: string[] | string) {
    if (cmd instanceof Array) {
        process.stdout.write(`\n`);
        cmd.map(cmdLine => printCommand(cmdLine, ''));
        return;
    }
    printCommand(cmd);
};

function printCommand(cmd: string, prefix = '\n') {
    process.stdout.write(`${prefix}> ${cmd}\n`);
};