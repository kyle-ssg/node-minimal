global.fetch = require('node-fetch'); // polyfil
require('./jobs/');

const http = require('http');
const express = require('express');
const api = require('./api');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.server = http.createServer(app);

//Apply middleware
// parse various different custom JSON types as JSON
app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));

// provide raw body
app.use(function (req, res, next) {
    req.rawBody = '';
    req.setEncoding('utf8');

    req.on('data', function (chunk) {
        req.rawBody += chunk;
    });

    req.on('end', function () {
        next();
    });
});

// api router
app.use('/', api());


app.server.listen(PORT);
console.log('Node server started on port ' + app.server.address().port);

module.exports = app;
