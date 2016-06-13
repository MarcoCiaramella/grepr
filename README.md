

# grepr


## Installation
npm install grepr


## Usage

Function signature is `function(string,dir,callback)` where:

* `string`: is the string to search;
* `dir`: is directory where the search starts;
* `callback`: is a function of type `function(file,indices,lines)` where file is the complete file path where the input string has been found, indices is an array of line index and lines is the array of lines containing the string.

Callback is called only on those files containing at least one occurrence of the input string. 

For example this call search in the current directory the word npm:

```javascript
var grepr = require('grepr');

grepr("npm","./", function(file,indices,lines){
	console.log("FOUND in "+file);
	console.log("INDICES\n"+indices);
	console.log("LINES\n"+lines);
});
```


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
