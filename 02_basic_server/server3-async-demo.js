/*
it demonstrate event driven nature of node

CreateServer completes immediately without waiting for request,, and therefore
'Server has started' is printed immediately.

Then every time we enter localhost:8888 in our browser 'Request recevied; is
printed on console (actuyally twice, not sure why?)
*/

var http = require("http");

function onRequest(request, response) {     
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello World by Dragan Nikolic!");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
