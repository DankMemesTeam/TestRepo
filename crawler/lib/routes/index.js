const controllers = require('../controllers');

module.exports = (app) => {
    require('./chat-router')(app, controllers.chatController);
    require('./home-router')(app, controllers.homeController);
};
