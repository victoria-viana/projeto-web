const User = require('../models/User');

module.exports = {
    async index(req, res){
        try {
            const users = await User.find();    
            return res.json(users);
        } catch (error) {
            return res.json(error);
        }
    },
    async create(req, res){
        try {
            const {img, name, cpf, password, permission} = req.body;            
            const user = await User.find({ cpf: cpf });  
            
            if(user.length === 0){
                const user = await User.create({
                    img,
                    name,
                    cpf,
                    password,
                    permission
                });

                return res.json(user);
            }else{
                res.status(400).json({
                    error: 'Já existe um usuário com este CPF.'
                })
            }
        } catch (error) {
            return res.json(error);
        }
    }
}