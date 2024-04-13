// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Ensure the path is correct

// Create an express application
const app = express();

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/ats_beecoders';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware for parsing application/json
app.use(bodyParser.json());

// User routes
app.use('/api/users', userRoutes);

// Default route for GET requests to the root URL '/'
app.get('/', (req, res) => {
    res.send('Hello from the Applicant Tracking System Backend!');
});

// Define a port number
const PORT = process.env.PORT || 3001;

// Start the server listening on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
