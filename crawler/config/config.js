module.exports = {
    defaultPortNumber: 3000,
    connectionString: 'mongodb://localhost:27017/projectDb',
    environmentPortNumber: process.env.PORT,
    acionGenreFilmsUrl: 'http://www.imdb.com/search/title?genres=action&page=',
    filmQueryString: 'div.lister-item div.lister-item-content>h3>a',
};
