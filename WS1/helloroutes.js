var http = require("http");

http.createServer(function (request, response) {

    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("homepage");
        response.end();
    }

    else if (request.url === "/helloroutes") {
        response.writeHead(200, { "Content-Type": "text/HTML" });
        response.write("<h1>Hello Routes</h1>");
        response.write("<h2>Muutos tiedostoon</h2>")
        response.end();
    }

    else {
        response.write('This is not the page you are looking for.')
        response.end();
}})
    .listen(8081);
