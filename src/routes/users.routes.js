const Router = require('express');
const router = Router();

const multer = require('multer');
const multerConfig = require('../conf/multer');


const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');


// Routes
// Get All Route
router.get('/users', getUsers);
// Get one User Route
router.get('/user/:id', getUser);
// Create Route
router.post('/user', multer(multerConfig).single("file"), createUser);
// Update Route
router.put('/user/:id', updateUser);
// Delete Route
router.delete('/user/:id', deleteUser);

module.exports = router;