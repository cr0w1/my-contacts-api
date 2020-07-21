const Router = require('express');
const router = Router();

const { v4 } = require('uuid');




const { verificationUser } = require('../controllers/login.controller');
const multer = require('multer');

// Routes
    // Checking User
        router.post('/auth', verificationUser);

module.exports = router;