var Router = require('express');
var config = require('../config')
module.exports = () => {
    const api = Router();

    api.get('/', (req, res) => {
        config.get()
            .then((data) => {
                console.log("Returning json");
                res.json(data);
            })
            .catch((data) => {
                res.json({error: 'Could not retrieve config'});
            })
    });

    api.post('/', (req, res) => {
        config.set(req.body)
            .then((data) => {
                res.json({});
            })
            .catch((data) => {
                res.json({error: 'Could not retrieve config'});
            })
    });

    return api;
};
