let {config, write} = require("../config");

function changeConfig(options) {
    for (const option in options) {
        if (options.hasOwnProperty(option)) {
            config[option] = options[option];
        }
    }
    write();
}

exports.changeConfig = changeConfig;
