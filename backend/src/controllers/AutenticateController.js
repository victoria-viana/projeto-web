const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = {
    async autenticate(req, res) {
        const {
            cpf,
            password,
        } = req.body;

        
        const user = await User.findOne({ cpf: cpf }); 
        
        if(!user){
            return res.status(400).json({ error: 'Usuário não existe.'});
        }else{
            if(cpf === user.cpf){
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign({ user: user.cpf, permission: user.permission }, process.env.JWTHASH, {
                            expiresIn: 86400,
                        });
                        res.json({
                                alert: 'Usuário atenticado!',
                                token                            
                        });
                    } else {
                        res.status(401).json({
                            error: 'Senha incorreta'
                        });
                    }
                });
            }
        }
    },
}