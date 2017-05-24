var http = require('http');
var uc = require('upper-case');

http.createServer(function( req, res){
    res.writeHead(200, {'Context-Type': 'text/html'});
    res.write(uc("Hellow World"));
    res.end();
}).listen(8080);