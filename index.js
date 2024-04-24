const express = require('express');
const app = express();
const port = 3000; // or any port you prefer

// Set up static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
