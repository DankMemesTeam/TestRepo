/* global $ */

const fs = require('fs');
const imgurUploader = require('imgur-uploader');

const uploadImage = (req, res) => {
    // console.log('bodyyyy '+ req.body.fileToUpload);

    imgurUploader(req.body.fileToUpload).then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = { uploadImage };
