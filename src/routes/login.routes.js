const Router = require('express');
const router = Router();

const { verificationUser } = require('../controllers/login.controller');

// Routes
    // Checking User
        router.post('/auth', verificationUser);

module.exports = router;