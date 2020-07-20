const { getConnection } = require('../database');
const { v4 } = require('uuid');

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

    const date = new Date(new Date() - 3600 * 1000 * 3).toISOString();

    const newContact = {
        id: v4(),
        user_id: req.body.user_id,
        name: req.body.name,
        telefone: req.body.telefone,
        image_name: req.file.originalname,
        image_size: req.file.size,
        image_key: req.file.filename,
        createAt: date,
    }
    getConnection().get('contacts').push(newContact).write();
    res.json({ 'Contact': newContact });
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