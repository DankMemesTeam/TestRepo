const controllers = require('../controllers');

module.exports = (app, data) => {
    require('./chat-router')(app, data, controllers.chatController);
    require('./home-router')(app, controllers.homeController);
};
