# grepr
node.js module that implements a recursive grep function.

Function prototype is function(string,dir,callback) where:
- string: is the text to search;
- dir: is directory where the search starts;
- callback is a function of type function(file,indicies,lines) where file is the complete file path where the text has been found,         indicies is an array of line index conteining text, and lines is the array of lines containing text.
