const http = require('http');
const fs = require('fs');

	var json = require('./sampledata.json');

	json.push({
		'name': 'John Doe',
		'age': '52',
		'company': 'Laurea',
		'address': 'Ratatie 22'
	});

	var dataset = JSON.stringify(json, "", 1);

	fs.writeFileSync('./dataset.json', dataset);