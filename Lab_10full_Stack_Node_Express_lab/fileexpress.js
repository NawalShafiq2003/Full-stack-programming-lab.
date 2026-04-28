// Section 9: Express.js – Server Development
// Initializes Express server manually

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Express Server Running</h1><p>Welcome to Express.js!</p>");
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});
