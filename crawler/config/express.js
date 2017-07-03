// /* globals  __dirname */

const express = require('express');

module.exports = () => {
    const app = express();

    app.set('views', './lib/views');
    app.set('view engine', 'pug');

    return app;
};
