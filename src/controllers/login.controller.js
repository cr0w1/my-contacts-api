const { getConnection } = require('../database');
const bcrypt = require('bcryptjs');

// Get of Id
const verificationUser = async (req, res) => {

    const user = getConnection().get('users').find({email: req.body.email}).value();

    if(!user)
        return res.status(400).send({error: 'User not found'});

    // PassWord Compare on Bcryptjs
    if(!await bcrypt.compare(req.body.password , user.password))
        return res.status(400).send({ error: 'Invalid password' });

    res.json(user);
}

module.exports = {
    verificationUser
}