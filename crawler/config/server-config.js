const express = require('./express');
const socket = require('./sockets');

const config = require('./config');

const connection = require('../database')
    .connection(config.connectionString);

const data = require('../data').messageData(connection);

module.exports = () => {
    const app = express();
    require('../lib/routes')(app, data);

    const server = socket(app, connection);

    return server;
};
