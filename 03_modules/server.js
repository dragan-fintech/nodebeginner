/*
package server as module

put everything in a function called start and export the function
*/

var http = require("http");

function start() {
    function onRequest(request, response) {     
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"}); 
        response.write("Hello World by Dragan Nikolic!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;