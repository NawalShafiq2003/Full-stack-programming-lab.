// Section 8: JSON Read & Send Data
// Sends structured JSON data to browser

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = { name: "Ali", age: 20 };
  res.end(JSON.stringify(data));
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Open browser to see JSON data");
});
