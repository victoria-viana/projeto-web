const express = require('express');
const routes = express.Router();
const AutenticateController = require('./controllers/AutenticateController');
const UserController = require('./controllers/UserController');
const ServiceController = require('./controllers/ServiceController');
const autenticateMiddleware = require('./middlewares/autenticate');

routes.use(autenticateMiddleware);
routes.post('/login', AutenticateController.autenticate);

routes.get('/users', UserController.index);
routes.get('/user/:cpf', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/edit', UserController.edit);
routes.patch('/users/deactivate', UserController.deactivate);
routes.patch('/users/activate', UserController.activate);
routes.delete('/users', UserController.remove);


routes.get('/service', ServiceController.index);
routes.get('/service/:code', ServiceController.show);
routes.post('/service', ServiceController.create);
routes.put('/service/edit', ServiceController.edit);
routes.delete('/service', ServiceController.remove);




module.exports = routes;