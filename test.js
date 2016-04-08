

var grepr = require('./index');

grepr("tempo","./test", function(file,indicies,lines){
	console.log("FOUND in "+file);
	console.log("INDICIES\n"+indicies);
	console.log("LINES\n"+lines);
});
