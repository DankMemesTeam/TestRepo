const data = require('../data');

module.exports = (app, db) => {
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('A user has connected');

        socket.on('disconnect', () => {
            console.log('A user has disconnected');
        });

        socket.on('chat message', (messageData) => {
            data.messageData(db).createMessage('lllevski', messageData)
                .then((_) => {
                    io.sockets.emit('new message', { msg: messageData });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    });

    return server;
};
