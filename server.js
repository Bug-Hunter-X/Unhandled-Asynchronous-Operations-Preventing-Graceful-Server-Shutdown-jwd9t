const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Uncommon bug: Server does not shut down gracefully
//The server may not shut down immediately when you use Ctrl+C or send a SIGINT signal.
//This can lead to resource leaks and unexpected behavior.
//The issue usually arises from event listeners or asynchronous operations that prevent the server from exiting cleanly.