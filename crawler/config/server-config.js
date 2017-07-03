const express = require('./express');
const socket = require('./sockets');

module.exports = () => {
    const app = express();
    require('../lib/routes')(app);

    const server = socket(app);

    return server;
};
