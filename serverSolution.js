const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isShuttingDown = false;

const shutdown = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server shut down successfully.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//The solution gracefully handles shutdown using process.on('SIGINT') and process.on('SIGTERM') events. The server now closes cleanly when interrupted.