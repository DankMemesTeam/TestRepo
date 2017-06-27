/* global $, io */
$(function() {
    const socket = io();

    $('#sendBtn').click(() => {
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });

    socket.on('new message', (data) => {
        const element = $('<li/>')
            .addClass('list-group-item')
            .text(data.msg);

        $('#chat').append(element);
    });
});
