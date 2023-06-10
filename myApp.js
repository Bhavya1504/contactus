const express = require('express');
const myApp = express();
const port = 5000;

// Set the static directory
myApp.use(express.static('public'));

// Routes
myApp.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Dynamic route for Contact Us
myApp.get('/contactus', (req, res) => {
  res.sendFile(__dirname + '/public/contactus.html');
});

myApp.get('/success', (req, res) => {
  res.sendFile(__dirname + '/public/success.html');
});

myApp.post('/contactus', (req, res) => {
  // Handle form submission
  // Logic to process the form data and save it
  // Redirect to success page
  res.redirect('/success');
});

myApp.post('/success', (req, res) => {
  // Handle form submission for success page
  // Logic to process the form data and display success message
  res.send('Form successfully filled');
});

// Start the server
myApp.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
