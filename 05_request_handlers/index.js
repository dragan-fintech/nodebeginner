/*
use our custom made server module to start server
*/

var server = require("./server");
var router = require("./router");

server.start(router.route);