const { getConnection } = require('../database');
const { v4 } = require('uuid');

// Get All
const getContacts = (req, res) => {
    const contacts = getConnection().get('contacts').value();
    res.json(contacts);
};

// Get For Id
const getContact = (req, res) => {
    const contact = getConnection().get('contacts').find({id: req.params.id }).value();
    res.json(contact);
}

// Create 
const createContatc = (req, res) => {
    const newContact = {
        id: v4(),
        name: req.body.name,
        telefone: req.body.telefone
    }
    getConnection().get('contacts').push(newContact).write();
    res.send(newContact);
}

// Update
const updateContacts = async (req, res) => {
    const result = await getConnection().get('contacts').find({id: req.params.id })
        .assign(req.body)
        .write();
    res.json(result);
}

const deleteContact = (req, res) => {
    const result = getConnection().get('contacts').remove({id: req.params.id }).write();
    res.json(result);
}

module.exports = {
    getContacts,
    createContatc,
    getContact,
    updateContacts,
    deleteContact
}