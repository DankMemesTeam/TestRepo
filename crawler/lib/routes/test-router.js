module.exports = (app, testController) => {
    const { Router } = require('express');
    const router = new Router();

    router.post('/upload', testController.uploadImage);

    app.use('/test', router);
};
