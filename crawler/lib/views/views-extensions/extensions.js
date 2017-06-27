const pug = require('pug');
const cache = {};

const getCompiledTemplate = (templateName) => {
    return new Promise((resolve, reject) => {
        if (cache[templateName]) {
            resolve(cache[templateName]);
            return;
        }

        cache[templateName] = pug.compileFile(`./lib/views/${templateName}.pug`);
        resolve(cache[templateName]);
    });
};

module.exports = {
    getCompiledTemplate,
};
