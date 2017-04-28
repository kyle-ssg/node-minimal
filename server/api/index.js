const Router = require('express').Router;
const config = require('./config-api');

module.exports = () => {
    const api = Router();

    api.get('/', (req, res) => {
        res.json({ message: 'API is up and running!' })
    });

    api.use('/config', config());
    return api;
};