// Section 3: Client-Server Communication (GET, POST)
// Handles GET (read data) and POST (send data) requests

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.method === 'GET' && req.url === '/users') {
    res.end("<h2>GET: Users List</h2><p>Ali, Ahmed</p>");
  } else if (req.method === 'POST' && req.url === '/users') {
    res.end("<h2>POST: User Added</h2>");
  } else {
    res.end("<h2>Welcome! Visit /users</h2>");
  }
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/users");
});
