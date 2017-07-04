const assert = require('assert');
const collections = require('../database').collections;
const models = require('../lib/models');

// Should think of there to require those modules or to pass them in the constructor
// Should require models in constructor
module.exports = (db) => {
    return {
        createMessage(username, content) {
            return new Promise((resolve, reject) => {
                collections(db, 'messages')
                    .then((collection) => {
                        const message = models.messageModel(username, content);

                        return collection.insertOne(message);
                    })
                    .then((result, err) => {
                        assert.equal(null, err);
                        assert.equal(1, result.insertedCount);

                        resolve();
                    });
            });
        },
        getLast50Messages() {
            return new Promise((resolve, reject) => {
                collections(db, 'messages')
                    .then((collection) => {
                        const messages = collection.find({})
                            .limit(50)
                            .toArray();

                        resolve(messages);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        },
    };
};
