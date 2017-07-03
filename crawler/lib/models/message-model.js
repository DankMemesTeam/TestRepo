module.exports = (username, msg) => {
    const message = {
        username: username,
        content: msg,
    };

    return message;
};
