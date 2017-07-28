var adder =function(a,b){
	return `sum is ${a+b}`;
};

 var name = 'sachin';
//use below exports for  function or variables in this file to be available for another files
module.exports.adder=adder;
module.exports.name=name;

