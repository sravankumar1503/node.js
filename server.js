
var http = require('http');
http.createServer(function(request,response){
response.writeHead(200,{'content-type': 'text/html'});
response.end("welcome to <br/> node js");
}).listen(3000);
console.log("server listening on http://127.0.0.1:3000");