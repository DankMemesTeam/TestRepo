// /* globals  __dirname */

const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('views', './lib/views');
    app.set('view engine', 'pug');


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    return app;
};
