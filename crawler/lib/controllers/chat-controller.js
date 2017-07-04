module.exports = (data) => {
    return {
        loadChatPage(req, res) {
            return data.getLast50Messages()
                .then((messages) => {
                    res.render('chat-page', { messages: messages });
                });
        },
    };
};
