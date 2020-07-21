const { getConnection } = require('../database');
const { v4 } = require('uuid');
const axios = require('axios');

// Get All
const getContacts = (req, res) => {
    const contacts = getConnection().get('contacts').value();
    res.json(contacts);
}

// Get All of User
const getContactsUser = (req, res) => {
    const contacts = getConnection().get('contacts').filter({ user_id: req.params.id }).value();
    res.json(contacts);
}

// Get of Id
const getContact = (req, res) => {
    const contact = getConnection().get('contacts').find({ id: req.params.id }).value();
    res.json(contact);
}

// Create 
const createContatc = (req, res) => {
    
    const config = {
        method: 'POST' ,
        url: 'https://api.imgur.com/3/image',
        data: req.file.buffer,
        headers: {
            'Authorization': `Client-ID ${process.env.CLIENT_ID_IMGUR}`
        }
    }

    axios(config).then(function (response) {
        const url = response.data.data.link;
        create(url);
    })
    .catch(function (error) {
        console.log(error);
    });

    async function create(url) {
        const date = new Date(new Date() - 3600 * 1000 * 3).toISOString();

        const newContact = {
            id: v4(),
            user_id: req.body.user_id,
            name: req.body.name,
            telefone: req.body.telefone,
            image_url: url,
            createAt: date,
        }
        getConnection().get('contacts').push(newContact).write();
        res.json({ 'Contact': newContact });
    }
}

// Update
const updateContact = async(req, res) => {
    const result = await getConnection().get('contacts').find({ id: req.params.id })
        .assign(req.body)
        .write();
    res.json(result);
}

// Delete 
const deleteContact = (req, res) => {
    const result = getConnection().get('contacts').remove({ id: req.params.id }).write();
    res.json(result);
}

module.exports = {
    getContacts,
    getContactsUser,
    createContatc,
    getContact,
    updateContact,
    deleteContact
}