

var grepr = require('./index');

grepr("tempo","./test", function(file,indices,lines){
	console.log("FOUND in "+file);
	console.log("INDICES\n"+indices);
	console.log("LINES\n"+lines);
});
