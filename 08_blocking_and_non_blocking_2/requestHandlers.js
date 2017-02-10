// request_handlers.js
var childProcess = require("child_process")

function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty"

    childProcess.exec("ls -lah", function(error, stdout, stderr) {
        content = stdout;
    });

    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;