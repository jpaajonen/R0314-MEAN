var json = require('./sampledata.json');

var html = '<table border = "1">';

for (var i = 0; i < json.length; i++) {
	html += '<tr>';
	html += '<td>' + json[i].name + '</td>'
	html += '<td>' + json[i].age + '</td>'
	html += '<td>' + json[i].company + '</td>'
	html += '<td>' + json[i].address + '</td>'
	html += '</tr>';

	console.log('<td>' + json[i].name + '</td>');
	console.log('<td>' + json[i].age + '</td>');
	console.log('<td>' + json[i].company + '</td>');
	console.log('<td>' + json[i].address + '</td>');
}

html += "</table>";
