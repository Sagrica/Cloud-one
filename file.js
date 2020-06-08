const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const message = 'Welcome to File 1';
const fullMessage = `${message}\n`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(fullMessage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
