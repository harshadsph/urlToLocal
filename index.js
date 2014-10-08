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
var argv = require('minimist')(process.argv);
//var spawn = require('child_process').spawn;
var curl = require( 'tinycurl' );



console.log("HARSHAD ");
var urls = argv.u;
var base_url = argv.b;
var dest = argv.d;

var urlArray = urls.split(',');
for (var a in urlArray){
	var paramUrl = urlArray[a];
	var file_url = base_url+paramUrl;
	console.log(file_url);
	var fileName = url.parse(paramUrl).pathname.split("/").pop();
	console.log(dest+"/"+fileName);
	var file = fs.createWriteStream(dest+"/"+fileName);
	/*var request = http.get(base_url+paramUrl, function(response) {
		//console.log(response);
		//response.pipe(file);	
		response.on('data', function(data){
			file.write(data);
		}).on('end', function() {
            file.end();
            console.log(fileName + ' downloaded to ' + dest);
        });
		file.on('finish', function() {
			file.close();
		});
	}).on('error', function(err) { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		console.log(err.message);
	});*/
	
	//var curl = spawn('curl', [file_url]);
	console.log(curl)
    // add a 'data' event listener for the spawn instance
    curl.stdout.on('data', function(data) { file.write(data); });
    // add an 'end' event listener to close the writeable stream
    curl.stdout.on('finish', function(data) {
        //file.end();
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });
    // when the spawn child process exits, check if there were any errors and close the writeable stream
    curl.on('exit', function(code) {
        if (code != 0) {
            console.log('Failed: ' + code);
        }
    });
}




return;