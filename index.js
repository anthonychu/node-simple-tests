var http = require('http');
var data = require('./lib/data');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(`<h1>Hello ${data.currentCity()}!</h1>`);

});

var port = process.env.PORT || 5000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);