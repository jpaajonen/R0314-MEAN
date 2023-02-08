//WS0 2
//console.log("Hello world!");

//ws0 3
//for (var i = 0; i < 101; i++) {
//    console.log("Laskuri on luvussa " + i);
//}

//ws0 6, 7, 8
var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header. HTTP status: 200 = OK
    //Content type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Ensimmäinen rivi<br>')
    response.write('Toinen rivi<br>')
    //ws0 9, 10
    //create a table using HTML and add it to a variable
    var table = "<table border = '1'><tr><td><strong>Name</strong></td><td><strong>Address</strong></td><td><strong>City</strong></tr></td><tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td></td></tr><tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr></table>";
    response.write(table);
    //Send the response body as "Hello World")
    response.end('<h1>Hello World</h1>');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


