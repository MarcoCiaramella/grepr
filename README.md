

# grepr



## Usage

Function prototype is `function(string,dir,callback)` where:

* `string`: is the text to search;
* `dir`: is directory where the search starts;
* `callback`: is a function of type `function(file,indices,lines)` where file is the complete file path where the text has been found, indices is an array of line index containing text, and lines is the array of lines containing text.

Callback is called only on those files containing at least one occurrence of the input string. 

For example this call search in the current dir the word npm:

```javascript
var grepr = require('grepr');

grepr("npm","./", function(file,indices,lines){
	console.log("FOUND in "+file);
	console.log("indices\n"+indices);
	console.log("LINES\n"+lines);
});
```


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
