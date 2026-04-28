// Section 6 & 7: Async I/O (Callbacks) + Non-blocking Code
// Reads file without blocking server execution

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/file') {
    // Async I/O - reads file without blocking
    fs.readFile('demo.txt', 'utf8', (err, data) => {
      if (err) {
        res.end("<h2>Error reading file</h2><p>Make sure demo.txt exists (run file3.js first)</p>");
      } else {
        res.end("<h2>File Data:</h2><p>" + data + "</p>");
      }
    });
  } else if (req.url === '/delay') {
    // Non-blocking code - setTimeout
    setTimeout(() => {
      res.end("<h2>Async Response After 2 Second Delay</h2>");
    }, 2000);
  } else {
    res.end("<h2>Visit /file or /delay</h2>");
  }
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
