module.exports = (app, data, controller) => {
    const { Router } = require('express');
    const router = new Router();

    const chatController = controller(data);

    router.get('/', chatController.loadChatPage);

    app.use('/chat', router);
};
