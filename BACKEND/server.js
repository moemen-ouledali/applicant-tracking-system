// Import express library
const express = require('express');

// Create an express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3001;

// Define a route for GET requests to the root URL '/'
app.get('/', (req, res) => {
    res.send('Hello from the Applicant Tracking System Backend!');
});

// Start the server listening on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/ats_beecoders';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

