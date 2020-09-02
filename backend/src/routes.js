const express = require('express');
const routes = express.Router();
const AutenticateController = require('./controllers/AutenticateController');
const UserController = require('./controllers/UserController');
const ServiceController = require('./controllers/ServiceController');
const autenticateMiddleware = require('./middlewares/autenticate');

routes.use(autenticateMiddleware);
routes.post('/login', AutenticateController.autenticate);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.post('/users/edit', UserController.edit);
routes.post('/users/deactivate', UserController.deactivate);
routes.delete('/users', UserController.remove);


routes.get('/service', ServiceController.index);
routes.post('/service', ServiceController.create);
routes.post('/service/edit', ServiceController.edit);
routes.delete('/service', ServiceController.remove);




module.exports = routes;