/**
 * Created by kylejohnson on 02/10/2016.
 */
//var config = require('./config-local');
let config = require('./config-dev');

if (process.env.ENVIRONMENT && process.env.ENVIRONMENT == 'PRODUCTION') {
    config = require('./config-prod');
}

module.exports = config;
