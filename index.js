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

 
module.exports = {
  urlToLocal: function(URL) {
		
		var currentFile = window.location.pathname.split("/").pop();
		var file = fs.createWriteStream(currentFile);
		var request = http.get(URL, function(response) {
			response.pipe(file);
		});
		
  }
};