// request_handlers.js
var childProcess = require("child_process")

function start(response) {
    console.log("Request handler 'start' was called.");

    childProcess.exec(
        "find /",
        {timeout: 10000, maxBuffer: 20000*1024}, 
        function(error, stdout, stderr) {
            response.writeHead(200, {"Content-Type": "text/plain"}); 
            response.write(stdout);
            response.end();
        }
    );
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;