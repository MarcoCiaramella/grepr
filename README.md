

# grepr



## Usage

Function prototype is `function(string,dir,callback)` where:

* `string`: is the text to search;
* `dir`: is directory where the search starts;
* `callback`: is a function of type `function(file,indicies,lines)` where file is the complete file path where the text has been found, indicies is an array of line index conteining text, and lines is the array of lines containing text.

For example this call search in the current dir the word npm:

```javascript
var grepr = require('grepr');

grepr("npm","./", function(file,indicies,lines){
	console.log("FOUND in "+file);
	console.log("INDICIES\n"+indicies);
	console.log("LINES\n"+lines);
});
```


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
