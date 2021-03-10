let {readFileSync, writeFileSync} = require("fs")

let config = {
    ...{server: "http://localhost", port: "5000"},
    ...JSON.parse(readFileSync("./config.json","utf-8"))
};

let write = () => {
    writeFileSync("./config.json", JSON.stringify(config));
}

exports.write = write;
exports.config = config;
