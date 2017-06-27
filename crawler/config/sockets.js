const init = (app) => {
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('A user has connected');

        socket.on('disconnect', () => {
            console.log('A user has disconnected');
        });

        socket.on('chat message', (data) => {
            io.sockets.emit('new message', { msg: data });
        });
    });

    return server;
};

module.exports = {
    init,
};
