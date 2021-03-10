const axios = require('axios');
const imageToBase64 = require('image-to-base64');

function send(file, options) {

    imageToBase64(file)
        .then(response => {
            axios
                .post(options.server + ":" + options.port + "/cli/upload", response)
                .then(res => {
                    console.log("Submitted successfully.")
                })
                .catch(error => {
                    console.error(error)
                });
        })
        .catch(error => console.log(error));
}

exports.send = send;
