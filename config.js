let {readFileSync, writeFileSync, existsSync} = require("fs")

let path = "./config.json"

let config = {};

if (existsSync(path))
    config = JSON.parse(readFileSync(path, 'utf8'));

let write = () => {
    writeFileSync(path, JSON.stringify(config));
}

exports.write = write;
exports.config = config;
