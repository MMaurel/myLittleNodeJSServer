var querystring = require('querystring');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

function start(response) {
	console.log('Start manager is called');

	var body = fs.readFile('./views/start.html', function (error, view) {
		if (error) {
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write(error + '\n');
			response.end();
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(view);
			response.end();
		}
	});
}

function mainCss(response) {
	console.log('Main css manager is called');

	var mainCss = fs.readFile('./css/main.css', function (error, styleSheet) {
		if (error) {
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write(error + '\n');
			response.end();
		} else {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(styleSheet);
			response.end();
		}
	});
}

exports.start = start;
exports.mainCss = mainCss;