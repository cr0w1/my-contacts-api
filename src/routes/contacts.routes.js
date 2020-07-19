const { Router } = require('express');
const router = Router();

const { getContacts , createContatc , getContact , updateContact , deleteContact } = require('../controllers/contacts.controller');

// Routes
    // Get All Route
        router.get('/contacts', getContacts );
    // Get one User Route
        router.get('/contact/:id', getContact);
    // Create Route
        router.post('/contact', createContatc);
    // Update Route
        router.put('/contact/:id', updateContact);
    // Delete Route
        router.delete('/contact/:id', deleteContact);

module.exports = router;