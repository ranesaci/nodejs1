console.log('Hello sachin');

var time =0;
/*setInterval(function() {
	console.log((time=time +10)+' sec passed');
	
}, 10000);*/

console.log('*****Function Expression*****');
function sayHi(){
	console.log('sayHi');
}
console.log('caling sayHi()');
sayHi(); //calling the function

var sayBye = function(){
	console.log('in sayBye');
};
console.log('caling sayBye()');
sayBye();//

console.log('*********function with param******');
function paramFunction(paramName){
	paramName();
}
console.log('caling sayBye() with param passed');
paramFunction(sayBye);

//***********************
console.log('******Using another js files******');
var counter = require('./count');
console.log('calling function from another js');
console.log(counter(['sachin','rane','30']));

console.log('******Module patterns******');
var myUtil = require('./myUtil');
console.log('calling export property');
console.log(myUtil.adder(5, 10));
console.log(myUtil.name);


console.log('******Event Emitter******');
var events = require('events');
//for clicking event like 

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
	console.log(msg+123);
});

myEmitter.emit('someEvent', 'The event was emitted');
//*******************inherit the event
var util = require('util');
var Person = function(name){
	this.name = name;
};

var sachin1 = new Person('sachin1');
var sachin2 = new Person('sachin2');
var sachin3 = new Person('sachin3');
var sachin4 = new Person('sachin4');
console.log(sachin1.name);

util.inherits(Person, events.EventEmitter);

var people = [sachin1,sachin2,sachin3];
people.forEach(function(person) {
	person.on('eventName', function(msg){
		console.log(person.name + ' said:'+msg);
	});
});

sachin1.emit('eventName', 'Hello');

console.log('Reading and writing files in sync');

var fs = require('fs');
//var readMeResult = fs.readFileSync('testFile.txt', 'utf8');
//console.log(readMeResult);

//writing to file
/*fs.writeFileSync('writeFile.txt', 'Hello, this will be written in file');
var readMeResultForWrittenFile = fs.readFileSync('writeFile.txt', 'utf8');
console.log(readMeResultForWrittenFile);

console.log('Reading and writing files in NONsync');
 fs.readFile('testFile.txt','utf8', function(err, data) {
	fs.writeFile('asyncFile.txt', 'Async data for write!!');
});
console.log('read data');*/

console.log('*****creating removing files**************');
//fs.unlink('testFile.txt');
console.log('*****creating removing directories**************');
/*fs.mkdir('test1');
fs.mkdirSync('test');
fs.rmdir('test');
fs.rmdirSync('test1');*/

console.log('*****creating  directories and reading files and creating file in created directory**************');

/*fs.mkdir('test', function(){
	fs.readFile('writeFile.txt','utf8', function(err, data) {
		fs.writeFile('./test/myTest.txt', data);
	});
});*/

console.log('*****client and servers**************');
//use http module to create server

var http = require('http');
//when servver gets created, we can call callback function for req res manipulation
//request = req+req headers
//response = res+res headers
/*var server = http.createServer(function (req,res) {
	console.log('req was made '+req.url);
	res.writeHead('200',{'Content-Type':'text/plain'});
	res.end('Hey , Sachin!!');
});

server.listen('3000','localhost');
console.log('Server started listening on port 300 ...');*/

console.log('******Streams and Buffers***********************');
//streams and buffers we use to increase the performance 
//writable streams - allow node to write data to a stream
//Readable Streams - allow node to read data from a stream
//duplex - allow node to read/write data 
console.log('global dir name:'+ __dirname);
/*var readStream = fs.createReadStream('./test/myTest.txt','utf8'); //adding data to stream
var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt');
readStream.pipe(writeStream);*/
//to receive chunk of data from stream, listen through it from event

/*readStream.on('data', function (chunk) {
	
	console.log('chunk Received:');
	console.log(chunk);
	console.log('Writing to stream');
	writeStream.write(chunk);
});*/

console.log('***********Pipes************************************');
//take data from read stream and write it to write stream

var readStream = fs.createReadStream('./test/myTest.txt','utf8'); //adding data to stream
var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt');
readStream.pipe(writeStream);
console.log('***************response from file****************');
//take data from read stream and write it to write stream

var readStream = fs.createReadStream('./test/myTest.txt','utf8'); //adding data to stream
var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt');
readStream.pipe(writeStream);

console.log('***************node package maanager****************');
//npm init - for package.json create
//npm install express -save - for adding packaage to package.jsson
//npm uninstall express - uninstall express package

console.log('***************nodemon package ****************');
//monitor the application files
//install it globally, so it will be available for all applications
//npm install -g nodemon;
























