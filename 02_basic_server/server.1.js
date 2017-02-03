var http = require("http");

function process_request(request, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello World by Dragan Nikolic!");
    response.end();
}

var server = http.createServer(process_request);
server.listen(8888);