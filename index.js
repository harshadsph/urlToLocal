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
var url = require('url');

var argv = process.argv;

console.log("HARSHAD ");
console.log(argv[2]);
var fileName = url.parse(argv[2]).pathname.split("/").pop();
console.log(fileName);
var file = fs.createWriteStream(fileName);
var request = http.get(argv[2], function(response) {
	response.pipe(file);
});