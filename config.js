let {readFileSync, writeFileSync, existsSync} = require("fs")

let path = "./config.json"

let config = {};

if (existsSync(path))
    config = readFileSync(path);

let write = () => {
    writeFileSync(path, JSON.stringify(config));
}

if (config.server === undefined && config.port === undefined) {
    config = {server: "http://localhost", port: "5000"};
    write();
}

exports.write = write;
exports.config = config;
