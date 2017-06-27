const fetch = require('node-fetch');

const getDataFromUrl = (url) => {
    return fetch(url)
        .then((res) => {
            return res.text();
        })
        .catch((err) => {
            return err;
        });
};

module.exports = {
    getDataFromUrl,
};

