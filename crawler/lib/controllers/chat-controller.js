/* globals $ */

const messagesData = require('../../data').messageData;

const loadChatPage = (req, res) => {
    return messagesData.getLast50Messages()
        .then((messages) => {
            res.render('chat-page', { messages: messages });
        });
};

module.exports = {
    loadChatPage,
};

