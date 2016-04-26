
var fs = require('fs');

var fileList = null;
var indexFile = 0;

function listDir(dir){

	var fileList = [];

	if( fs.existsSync(dir) ) {
		fs.readdirSync(dir).forEach(function(file,index){
			var curPath = dir + "/" + file;
			if(fs.lstatSync(curPath).isDirectory()) {
				var res = listDir(curPath);
				for (var i = 0; i < res.length; i++) {
					fileList.push(res[i]);
				}
			} else {
				fileList.push(curPath);
			}
		});
	}

	return fileList;
}

function search(string,file,callback){

	var stream = fs.createReadStream(file, 'utf8');
	var numCharFound = 0;
	var stringIndex = 0;
	var found = false;
	var foundNewLine = false;
	var indices = [];
	var lineIndex = 0;
	var lines = [];
	var line = '';

	stream.on('data', function(chunk){
		for (var i = 0; i < chunk.length; i++) {

			var char = chunk[i];

			if (char !== '\n') {
				line += char;
			}

			if (char === string[stringIndex]) {
				numCharFound++;
				stringIndex++;
				if (numCharFound === string.length) {
					found = true;
				}
			}
			else {

				if (char === '\n') {
					if (found) {
						lines.push(line);
						indices.push(lineIndex);
						foundNewLine = true;
						found = false;
						numCharFound = 0;
						stringIndex = 0;
					}
					else {
						line = '';
					}
					lineIndex++;
				}

				numCharFound = 0;
				stringIndex = 0;
			}
		}
	});
	stream.on('end', function(){
	});
	stream.on('close', function(){
		if (foundNewLine) {
			callback(file,indices,lines);
		}
		if (indexFile === fileList.length) {
			return;
		}
		search(string,fileList[indexFile++],callback);
	});
}

function grepr(string,dir,callback){

	fileList = listDir(dir);
	search(string,fileList[indexFile++],callback);
}

module.exports = grepr;

