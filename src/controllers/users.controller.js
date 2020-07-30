const { getConnection } = require('../database');
const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');
const axios = require('axios');

// Get All
const getUsers = (req, res) => {
    const users = getConnection().get('users').value();
    res.json(users);
}

// Get of Id
const getUser = (req, res) => {
    const user = getConnection().get('users').find({ id: req.params.id });
    res.json(user);
}

// Create
const createUser = async(req, res) => {

    //PassWord Crypt on Bcryptjs
    const password = await bcrypt.hash(req.body.password, 10);

    const date = new Date(new Date() - 3600 * 1000 * 3).toISOString();

    const newUser = {
        id: v4(),
        name: req.body.name,
        email: req.body.email,
        password: password,
        status: '',
        image_url: req.body.url,
        createAt: date,

    };

    if(getConnection().get('users').push(newUser).write()){
        res.json({ 
            'user': newUser ,
            'success': true
        });
    }else{
        res.json({
            'success' : false
        })
    }
    
}

// Update
const updateUser = async(req, res) => {
    const result = await getConnection().get('users').find({ id: req.params.id })
        .assign(req.body)
        .write();
    res.json(result);
}

// Delete 
const deleteUser = (req, res) => {
    const result = getConnection().get('users').remove({ id: req.params.id }).write();
    res.json(result);
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}