var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	console.log('Request from :'+request.url );
	response.writeHead('200', {'Content-Type':'application/json'});
	var jsonObj = {
			name:'sachin',
			lastName : 'rane',
			age : 29
	};
	response.end(JSON.stringify(jsonObj));
	
});

server.listen('3000', 'localhost');
console.log('server started at localhost:3000');
