const { getConnection } = require('../database');
const bcrypt = require('bcryptjs');

// Get of Id
const verificationUser = async(req, res) => {

    const user = getConnection().get('users').find({ email: req.body.email }).value();

    if (!user)
        return res.json({ 
            error: 'usuario não encontrado.',
            success : false
        });

    // PassWord Compare on Bcryptjs
    if (!await bcrypt.compare(req.body.password, user.password))
        return res.json({ 
            error: 'Senha inválida.', 
            success : false 
        });

    res.json({
        user: user,
        success: true
    });
}

module.exports = {
    verificationUser
}