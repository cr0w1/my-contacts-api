const Router = require('express');
const router = Router();

const { verificationUser } = require('../controllers/login.controller');

router.post('/auth', verificationUser);

module.exports = router;