// Section 5: Modules & NPM (Import Modules)
// Uses built-in modules like fs to handle file operations

const fs = require('fs');
const http = require('http');

// Write a file synchronously
fs.writeFileSync("demo.txt", "Hello Node.js");

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end("<h2>File Created Successfully</h2><p>demo.txt has been written!</p>");
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
