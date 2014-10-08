#! /usr/bin/env node
/**
 * Copy files from URL to local machine
 *
 * @param  {String} URL
 * @return {String} File path
 */
"use strict";

var fs = require('fs');
var http = require('http');

console.log("HARSHAD ");
console.log(argv);
var currentFile = location.pathname.split("/").pop();
console.log(currentFile);
var file = fs.createWriteStream(currentFile);
var request = http.get(URL, function(response) {
	response.pipe(file);
});