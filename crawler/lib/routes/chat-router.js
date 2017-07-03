module.exports = (app, controller) => {
    const { Router } = require('express');
    const router = new Router();

    router.get('/', controller.loadChatPage);

    app.use('/chat', router);
};
