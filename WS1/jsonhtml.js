const http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

	var json = require('./sampledata.json');
	var html = '<table border = "1">';
	for (var i = 0; i < json.length; i++) {
		html += '<tr>';
		html += '<td>' + json[i].name + '</td>'
		html += '<td>' + json[i].age + '</td>'
		html += '<td>' + json[i].company + '</td>'
		html += '<td>' + json[i].address + '</td>'
		html += '</tr>';
	}

	html += "</table>";

	response.write(html);
	response.end();
})
.listen(8000);