var http = require("http");

http.createServer(function (request, response) {

    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8"  });
        response.write("toimiiko ääkköset?");
        response.end();
    }

    else if (request.url === "/helloroutes") {
        response.writeHead(200, { "Content-Type": "text/HTML" });
        response.write("<h1>Hello Routes</h1>");
        response.end();
    }

    else {
        response.write('This is not the page you are looking for.')
        response.end();
}})
    .listen(8081);
