// /* globals  __dirname */

const express = require('express');
const pug = require('pug');
const viewExtensions = require('../lib/views/views-extensions');

const init = (movies) => {
    const app = express();

    app.set('views', './lib/views');
    app.set('view engine', 'pug');

    app.get('/', (req, res) => {
        // console.log(res);
        viewExtensions.extensions.getCompiledTemplate('main-page')
            .then((template) => {
                return template({
                    title: 'DankMemes Team',
                    name: 'Mitko Stoikov',
                    'movies': movies,
                });
            })
            .then((html) => {
                res.send(html);
            });
    });

    app.get('/chat', (req, res) => {
        res.render('chat-page');
    });

    return app;
};

module.exports = {
    init,
};