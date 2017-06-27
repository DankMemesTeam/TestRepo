const configModule = require('./config');
const config = require('./config/config.js');

const utils = require('./utils');
const dataParser = utils.parsers;

const acionGenreFilmsUrl = config.acionGenreFilmsUrl;
const queryString = config.filmQueryString;

// --- Below should be moved to a separate module
const movieNames = [];
const promises = [];
let counter = 1;

Array.from({ length: 1 })
    .forEach((_) => promises.push(dataParser.getAnchorNames(
        acionGenreFilmsUrl + counter++,
        queryString
    )));

Promise.all(promises)
    .then((results) => {
        results.forEach((x) => movieNames.push(...x));
    });

// ---

const port = Number(config.environmentPortNumber || config.defaultPortNumber);
const app = configModule.express.init(movieNames);
const server = configModule.socketIo.init(app);

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});
