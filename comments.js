// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');

// Create route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run server
// node comments.js
// Open browser and go to http://localhost:3000/comments
// You should see the comments data displayed in JSON format in the browser.