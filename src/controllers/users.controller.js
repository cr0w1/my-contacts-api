const { getConnection } = require('../database');
const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');

// Get All
const getUsers = (req, res) => {
    const users = getConnection().get('users').value();
    res.json(users);
}

// Get of Id
const getUser = (req, res) => {
    const user = getConnection().get('users').find({id: req.params.id});
    res.json(user);
}

// Create
const createUser = async (req, res) => {
    console.log(req.file);
    // PassWord Crypt on Bcryptjs
    const password = await bcrypt.hash(req.body.password , 10);

    const date = new Date(new Date()-3600*1000*3).toISOString();

    const newUser = {
        id: v4(),
        name: req.body.name,
        email: req.body.email,
        password: password,
        status: '',
        createAt: date,
        
    };

    const newImage = {
        id: v4(),
        user_id: newUser.id,
        name: req.file.originalname,
        size: req.file.size,
        key: req.file.filename,
        createAt: date,
    };
    getConnection().get('users').push(newUser).write();
    getConnection().get('image').push(newImage).write();
    res.json({ 'image' : newImage , 'user' : newUser , 'result' : true} );
}

// Update
const updateUser = async (req, res) => {
    const result = await getConnection().get('users').find({id: req.params.id })
        .assign(req.body)
        .write();
    res.json(result);
}

// Delete 
const deleteUser = (req, res) => {
    const result = getConnection().get('users').remove({ id: req.params.id });
    res.json(result);
}

// Get Image
const getImage = (req, res) => {
    const result = getConnection().get('image').find({ user_id: req.params.id });
    res.json(result);
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getImage
}