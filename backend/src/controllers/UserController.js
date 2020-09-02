const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async index(req, res){
        try {
            const users = await User.find();    

            if(req.user && req.permission === 1){
                return res.json(users);
            }else{
                return res.status(401).json({
                    error: 'Você não tem autorização para ver usuários.'
                })
            }
            
        } catch (error) {
            return res.json(error);
        }
    },
    async create(req, res){
        try {
            const {img, name, cpf, password, permission} = req.body;      
            const user = await User.findOne({ cpf: cpf }); 

            if(req.user && req.permission === 1){
                if(!user){
                    const newUser = await User.create({
                        img,
                        name,
                        cpf,
                        password: bcrypt.hashSync(password, 10, (err, hash) => { return hash;}),
                        permission,
                        isActive: true
                    });
    
                    return res.json(newUser);
                }else{
                    res.status(400).json({
                        error: 'Já existe um usuário com este CPF.'
                    })
                }  
            }else{
                return res.status(401).json({
                    error: 'Você não tem autorização para criar usuários.'
                })
            }

            
        } catch (error) {
            return res.json(error);
        }
    },
    async edit(req, res){

        const {img, name, cpf, password, permission, isActive} = req.body;   
        
        let user = await User.findOne({ cpf: cpf });

        if(req.user && req.permission === 1){
            if(user != null){

                await User.findOneAndUpdate({
                    cpf,
                }, {
                    $set: {
                        img,
                        name,
                        password,
                        permission,
                        isActive
                    }
                }, {
                    new: true 
                }, (err, doc) => {
                    if ( err ) {
                        return res.json({error: "Erro, não foi possível editar este usuário."});
                    }
                    return res.json({alert: 'Usuário alterado com sucesso!'});
                });
            }else{
                return res.json({error: "Erro, não foi possível editar este usuário."});
            }
        }else{
            return res.status(401).json({
                error: 'Você não tem autorização para editar usuários.'
            })
        }


        
    },
    async deactivate(req, res){

        const {img, name, cpf, password, permission} = req.body;   
        
        let user = await User.findOne({ cpf: cpf });

        if(req.user && req.permission === 1){
            if(user != null){

                await User.findOneAndUpdate({
                    cpf,
                }, {
                    $set: {
                        isActive: false
                    }
                }, {
                    new: true 
                }, (err, doc) => {
                    if ( err ) {
                        return res.json({error: "Erro, não foi possível desativar este usuário."});
                    }
                    return res.json({alert: 'Usuário desativado com sucesso!'});
                });
            }else{
                return res.json({error: "Erro, não foi possível desativar este usuário."});
            }
        }else{
            return res.status(401).json({
                error: 'Você não tem autorização para desativar usuários.'
            })
        }


        
    },
    async remove(req, res){

        const { cpf } = req.body;

        const remove = await User.deleteOne({cpf: cpf});

        if(req.user && req.permission === 1){
            if(remove.deletedCount > 0){
                return res.json({ alert: `Usuário foi deletado com sucesso!`});
            }else{
                return res.json({ error: `Não foi possível deletar o usuário de CPF informado.`});
            }
        }else{
            res.status(401).json({
                error: 'Você não tem autorização para deletar usuários.'
            })
        }
    }
}