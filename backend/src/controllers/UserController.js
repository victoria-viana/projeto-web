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
            const user = await User.findOne({ cpf: cpf }); 

            
            if(!user){
                const newUser = await User.create({
                    img,
                    name,
                    cpf,
                    password,
                    permission
                });

                return res.json(newUser);
            }else{
                res.status(400).json({
                    error: 'Já existe um usuário com este CPF.'
                })
            }
        } catch (error) {
            return res.json(error);
        }
    },
    async edit(req, res){

        const {img, name, cpf, password, permission} = req.body;   
        
        let user = await User.findOne({ cpf: cpf });

        if(user != null){

            await User.findOneAndUpdate({
                cpf,
            }, {
                $set: {
                    img,
                    name,
                    password,
                    permission
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
    },
    async remove(req, res){

        const { cpf } = req.body;

        const remove = await User.deleteOne({cpf: cpf});

        if(remove.deletedCount > 0){
            return res.json({ alert: `Usuário foi deletado com sucesso!`});
        }else{
            return res.json({ error: `Não foi possível deletar o usuário de CPF informado.`});
        }
    }
}