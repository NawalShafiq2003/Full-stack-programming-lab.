// Section 4: Web Server (http module)
// Creates a basic HTTP server that responds in browser

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end("<h1>Hello Web Server</h1>");
}).listen(3000, () => {
  console.log("Web Server running at http://localhost:3000");
});
