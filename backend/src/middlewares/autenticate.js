const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) =>{

    if(req.url === '/login' || req.url.includes('/uploads')){
        return next();
    }else{
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                error: 'Usuário não autorizado. Token não informado.'
            });
        }

        const parts = authHeader.split(' ');

        if(!parts.length === 2){
            return res.status(401).json({
                error: 'Token não está nos padrões.'
            })
        }else{
            const [ scheme, token ] = parts;
            if(!/^Bearer$/i.test(scheme)){
                return res.status(401).json({
                    error: 'Token mal formatado'
                })
            }else{
                jwt.verify(token, process.env.JWTHASH, (err, decoded) => {
                    if(err){
                        return res.status(401).json({
                            error: 'Token inválido.'
                        })
                    }else{
                        req.user = decoded.user;
                        req.permission = decoded.permission;
                        return next();
                    }
                })
            }
        }
    }

    
}