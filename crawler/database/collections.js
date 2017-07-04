module.exports = (connection, collectionName) => {
    return new Promise((resolve, reject) => {
        connection
            .then((db) => {
                const collection = db.collection(collectionName);

                const wrappedCollection = {
                    collectionName: collection.collectionName,
                    namespace: collection.namespace,
                    find: collection.find,
                    findOne: collection.findOne,
                    findAndModify: collection.findAndModify,
                    insertOne: collection.insertOne,
                    deleteOne: collection.deleteOne,
                    options: collection.options,
                    stats: collection.stats,
                };

            // When replaced with the upper collection works perfectly but wrapped object breaks something
                resolve(wrappedCollection);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
