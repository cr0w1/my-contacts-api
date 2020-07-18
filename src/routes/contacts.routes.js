const { Router } = require('express');
const router = Router();

const { getContacts , createContatc , getContact , updateContact , deleteContact } = require('../controllers/contacts.controller');

router.get('/contacts', getContacts );
router.get('/contacts/:id', getContact);
router.post('/contacts', createContatc);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;