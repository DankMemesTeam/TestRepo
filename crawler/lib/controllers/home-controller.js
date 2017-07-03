const utils = require('../../utils');
const config = require('../../config/config.js');
const dataParser = utils.parsers;

const movieNames = [];
const promises = [];
let counter = 1;

const loadHomePage = (req, res) => {
    loadMoviesFromCrawler()
        .then((movies) => {
            res.render('home-page', {
                title: 'DankMemes Team',
                name: 'Mitko Stoikov',
                'movies': movies,
            });
        });
};

const loadMoviesFromCrawler = () => {
    return new Promise((resolve, reject) => {
        Array.from({ length: 1 })
            .forEach((_) => promises.push(dataParser.getAnchorNames(
                config.acionGenreFilmsUrl + counter++,
                config.filmQueryString
            )));

        Promise.all(promises)
            .then((results) => {
                results.forEach((x) => movieNames.push(...x));
            })
            .then((_) => {
                resolve(movieNames);
            });
    });
};

module.exports = {
    loadHomePage,
};
