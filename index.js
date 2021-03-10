const { program } = require('commander');
program.version(require("./package.json").version);

const axios = require('axios');

const imageToBase64 = require('image-to-base64');

program
    .command('send <file>')
    .action(send)
    .option('-s, --server <url>', 'set backend server', "http://localhost")
    .option('-p, --port <port>', 'set backend server port', "5000")


program.parse(process.argv);

function send(file, options) {

    imageToBase64(file)
        .then(response => {
                console.log(response);
                axios
                    .post(options.server + options.port, {
                        image: response
                    })
                    .then(res => {
                        console.log("Submitted successfully.")
                    })
                    .catch(error => {
                        console.error(error)
                    });
            })
        .catch(error => console.log(error));
}
