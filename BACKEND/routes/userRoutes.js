const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

// POST /register: Register a new user
router.post('/register', async (req, res) => {
    try {
        // Create a new user without hashing the password
        const newUser = new User({
            role: req.body.role,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            password: req.body.password, // Directly using the provided password
            phoneNumber: req.body.phoneNumber,
            city: req.body.city,
            highestEducationLevel: req.body.highestEducationLevel
        });

        // Save the new user
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering the user');
    }
});

module.exports = router;
