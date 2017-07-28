var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	console.log('Request from :'+request.url );
	response.writeHead('200', {'Content-Type':'text/html'});
	var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
	myReadStream.pipe(response);
	
});

server.listen('3000', 'localhost');
console.log('server started at localhost:3000');
