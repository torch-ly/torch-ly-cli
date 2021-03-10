#!/usr/bin/env node

let {send} = require("./commands/send");
let {changeConfig} = require("./commands/config");

let {config} = require("./config");

const { program } = require('commander');
program.version(require("./package.json").version);

program
    .command('send <file>')
    .action(send)
    .option('-s, --server <url>', 'set backend server', config.server)
    .option('-p, --port <port>', 'set backend server port', config.port);

program
    .command('config')
    .action(changeConfig)
    .option('-s, --server <url>', 'set default backend server', config.server)
    .option('-p, --port <port>', 'set default server port', config.port)
    .command('ls')
    .action(() => console.log(config));

program.parse(process.argv);
