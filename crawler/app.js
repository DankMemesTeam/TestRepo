const config = require('./config/config.js');
const port = Number(config.environmentPortNumber || config.defaultPortNumber);

const server = require('./config')();

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});
