const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const message = 'Welcome to File 2';
const fullMessage = `<html><body><h1>${message}</h1></body></html>\n`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(fullMessage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
