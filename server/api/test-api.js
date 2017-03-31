var Router = require('express');

module.exports = () => {
    const api = Router();

    api.get('/', (req, res) => {
        res.json({ message: 'OK' })
    });

    api.put('/', (req, res) => {
        res.json({ message: 'OK' })
    });

    api.post('/', (req, res) => {
        res.json({ message: 'OK' })
    });

    api.delete('/', (req, res) => {
        res.json({ message: 'OK' })
    });

    return api;
};
