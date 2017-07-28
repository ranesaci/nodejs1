var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	console.log('Request from :'+request.url );
	
	if(request.url === '/home' || request.url === '/'){
		response.writeHead('200',{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(response);
	}else if (request.url === '/contact'){
		response.writeHead('200',{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(response);
	 
	}else {
		response.writeHead('400',{'Content-Type': 'text/html'});
		response.end('Resource not found!!');
	}
	
});

server.listen('3000', 'localhost');
console.log('server started at localhost:3000');
