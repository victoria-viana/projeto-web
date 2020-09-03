const Service = require('../models/Service');

module.exports = {
    async index(req, res){
        try {
            const services = await Service.find();    

            if(req.user && req.permission === 1 || req.permission === 2 || req.permission === 3){
                return res.json(services);
            }else{
                res.status(401).json({
                    error: 'Você não tem autorização para visualizar serviços.'
                })
            }
            
        } catch (error) {
            return res.json(error);
        }
    },
    async create(req, res){
        try {
            const {
                code,
                type, 
                clientName, 
                colectAddress,
                destinationAddress,
                collaborator,
                createdBy,
                createdAt,
                status,
                name,
                phone,
                vehicleType,                
                collectImgs,
                deliveryImgs,
                plate,
                color,
                model
            } = req.body; 

            const service = await Service.findOne({ code }); 

            if(req.user && req.permission === 1 || req.permission === 2){
                if(!service){
                    const newService = await Service.create({
                        code,
                        type,
                        clientName,
                        colectAddress,
                        destinationAddress,
                        collaborator,
                        createdBy,
                        createdAt,
                        status,
                        vehicle:{
                            owner:{
                                name: name,
                                phone: phone,
                            },
                            type: vehicleType,
                            imgs:{
                                collectImgs: collectImgs,
                                deliveryImgs: deliveryImgs,
                            },
                            plate: plate,
                            color: color,
                            model: model,
                        }
                    });
    
                    return res.json(newService);
                }else{
                    res.status(400).json({
                        error: 'Já existe um serviço com esse código.'
                    })
                }
            }else{
                res.status(401).json({
                    error: 'Você não tem autorização para criar serviços.'
                })
            }
            
        } catch (error) {
            return res.json(error);
        }
    },
    async edit(req, res){

        const {
            code,
            type, 
            clientName, 
            colectAddress,
            destinationAddress,
            collaborator,
            createdBy,
            createdAt,
            status,
            name,
            phone,
            vehicleType,                
            collectImgs,
            deliveryImgs,
            plate,
            color,
            model
        }= req.body;
        
        let service = await Service.findOne({ code });

        if(req.user && req.permission === 1 || req.permission === 2){
            if(service != null){

                await Service.findOneAndUpdate({
                    code,
                }, {
                    $set: {
                        type,
                        clientName,
                        colectAddress,
                        destinationAddress,
                        collaborator,
                        createdBy,
                        createdAt,
                        status,
                        vehicle:{
                            owner:{
                                name: name,
                                phone: phone,
                            },
                            type: vehicleType,
                            imgs:{
                                collectImgs: collectImgs,
                                deliveryImgs: deliveryImgs,
                            },
                            plate: plate,
                            color: color,
                            model: model,
                        }
                    }
                }, {
                    new: true 
                }, (err, doc) => {
                    if ( err ) {
                        return res.json({error: "Erro, não foi possível editar este serviço."});
                    }
                    return res.json({alert: 'Serviço editado!'});
                });
            }else{
                return res.json({error: "Erro, não foi possível editar este serviço."});
            }
        }else{
            res.status(401).json({
                error: 'Você não tem autorização para editar serviços.'
            })
        }

        
    },
    async remove(req, res){

        const { code } = req.body;

        const remove = await Service.deleteOne({ code });

        if(req.user && req.permission === 1 || req.permission === 2){
            if(remove.deletedCount > 0){
                return res.json({ alert: `Serviço deletado com sucesso!`});
            }else{
                return res.json({ error: `Não foi possível deletar o serviço.`});
            }
        }else{
            res.status(401).json({
                error: 'Você não tem autorização para deletar serviços.'
            })
        }

        
    }
}