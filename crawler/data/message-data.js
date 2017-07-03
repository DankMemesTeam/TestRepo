const config = require('../config/config');
const { MongoClient } = require('mongodb');

const assert = require('assert');
const client = MongoClient.connect(config.connectionString);

const models = require('../lib/models');

// Should think of there to require those modules or to pass them in the constructor
// Should require models in constructor
module.exports = {
    createMessage(username, content) {
        return new Promise((resolve, reject) => {
            client
                .then((db) => {
                    const dbMessages = db.collection('messages');
                    const message = models.messageModel(username, content);

                    return dbMessages.insertOne(message)
                        .then((result, err) => {
                            assert.equal(null, err);
                            assert.equal(1, result.insertedCount);

                            resolve();
                        });
                });
        });
    },
    getLast50Messages() {
        return new Promise((resolve, reject) => {
            client
                .then((db, err) => {
                    if (err) {
                        reject(err);
                    }

                    const recentMessages = db.collection('messages')
                        .find({})
                        .limit(50)
                        .toArray();

                    resolve(recentMessages);
                });
        });
    },
};
