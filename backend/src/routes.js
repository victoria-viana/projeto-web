const express = require('express');

const routes = express.Router();

routes.get('/', async (req, res) => {
    res.send(
        '<h1>olá</h1>'
    );
});

module.exports = routes;