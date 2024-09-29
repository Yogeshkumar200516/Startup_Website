const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Contact form route (POST)
router.post('/', async (req, res) => {
    const { name, email, phone, subject, message, contactMethod } = req.body;

    // Create a new contact document
    const newContact = new Contact({
        name,
        email,
        phone,
        subject,
        message,
        contactMethod
    });

    try {
        // Save the contact data to MongoDB
        await newContact.save();
        res.json({ message: 'Contact form data saved successfully!' });
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ message: 'Failed to save contact form data' });
    }
});

module.exports = router;
