const { Router } = require('express');
const router = Router();

const multer = require('multer');
const multerConfig = require('../conf/multer');

const { getContacts, getContactsUser, createContatc, getContact, updateContact, deleteContact } = require('../controllers/contacts.controller');

// Routes
    // Get All Route
        router.get('/contacts', getContacts);
    // Get All of User
        router.get('/contacts/user/:id', getContactsUser);
    // Get one User Route
        router.get('/contact/:id', getContact);
    // Create Route
        router.post('/contact', multer().single("file"), createContatc);
    // Update Route
        router.put('/contact/:id', updateContact);
    // Delete Route
        router.delete('/contact/:id', deleteContact);

module.exports = router;