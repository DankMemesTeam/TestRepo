const dataProvider = require('../data-providers');
const domParser = require('../dom-parsers');

const parseData = (url, queryString) => {
    return dataProvider.getDataFromUrl(url)
        .then((responseHtml) => {
            return domParser.initDomParser(responseHtml);
        })
        .then(($) => {
            const queryResult = $(queryString);
            return queryResult;
        })
        .catch((err) => {
            return err;
        });
};

const getAnchorHrefs = (url, queryString) => {
    return parseData(url, queryString)
        .then((result) => {
             const hrefs = [...result];

           return hrefs.map((x) => x.href);
        });
};

const getAnchorNames = (url, queryString) => {
    return parseData(url, queryString)
        .then((result) => {
           const names = [...result];

           return names.map((x) => x.text);
        });
};

module.exports = {
    parseData,
    getAnchorHrefs,
    getAnchorNames,
};
