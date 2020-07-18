const Router = require('express');
const router = Router();

const multer = require('multer');
const multerConfig = require('../conf/multer');


const { getUsers , getUser , createUser , updateUser , deleteUser } = require('../controllers/users.controller');


// Routes
    // Get All Route
    router.get('/users', getUsers);
    // Get one User Route
    router.get('/users/:id', getUser);
    // // Get one User Route
    // router.post('/users', multer(multerConfig).single("file") , (req , res) => {

    //     console.log(req.file);

    //     return res.json("foi");
    // });
    // Create Route
    router.post('/users', multer(multerConfig).single("file") , createUser);
    // Update Route
    router.put('/users/:id', updateUser);
    // Delete Route
    router.delete('/users/:id', deleteUser);

module.exports = router;