const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Nothing here to see');
        response.end();
    }

    else if (request.url === '/frontpage') {
        response.writeHead(200, { 'Content-Type': 'text/HTML' });
        fs.readFile('frontpage.html', function(err, data) {
        response.write(data);
        response.end();
        });
           
    }

    else if (request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/HTML' });
        var contact = fs.readFileSync('contact.html');
        response.write(contact);
        response.end();
    }
    
    else if (request.url === '/plaintext') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        var textFile = fs.readFileSync('example2.txt');
        response.write(textFile);
        response.end();
    }    

    else if (request.url === '/json') {
        response.writeHead(200, { 'Content-Type': 'text/json' });
        var json = require('./sampledata.json');
        response.write(JSON.stringify(json));
        response.end();
    }    

    else {
        response.write('This is not the page you are looking for.')
        response.end();
}})
    .listen(8081);