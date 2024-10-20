// Import Express
const express = require('express');

// Initialize the app
const app = express();

// Define the port
const PORT = process.env.PORT || 4000;

// Define a simple route
app.get('/api', (req, res) => {
  res.send('Hello, World! to check action runner');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port for testings ${PORT}`);
});
