/* globals  __dirname */

const express = require('express');
const pug = require('pug');

const init = (movies) => {
    const app = express();

    app.set('views', './lib/views');
    app.set('view engine', 'pug');

    app.get('/', (req, res) => {
        console.log(res);
        const compiledTemplate = pug.compileFile('./lib/views/main-page.pug');
        const response = compiledTemplate({ title: 'DankMemes Team', name: 'Mitko Stoikov', 'movies': movies });

        res.send(response);
    });

    app.get('/chat', (req, res) => {
        res.render('chat-page');
    });

    return app;
};

module.exports = {
    init,
};
