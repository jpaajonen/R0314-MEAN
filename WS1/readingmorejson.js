const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/json'});

	var json = require('./sampledata.json');
	console.log(json);

	json.push({
		'name': 'John Doe',
		'age': '52',
		'company': 'Laurea',
		'address': 'Ratatie 22'
	});

	console.log(json);

	var dataset = JSON.stringify(json, "", 1);

	fs.writeFileSync('./dataset.json', dataset);

	var dataset = require('./dataset.json');
	delete dataset[1];

	response.write(JSON.stringify(dataset));
	response.end();

	console.log(dataset);

}).listen(8081);