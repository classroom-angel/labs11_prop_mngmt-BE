/* GENERAL HELPERS */
const fs = require('fs');
const path = require('path');

const forEachFile = (dirname, pathway, callback) => {
  fs.readdir(path.resolve(dirname, pathway), (err, files) => {
    if (err) console.error(err);
    files.forEach(callback);
  });
};

module.exports = {
  forEachFile
};
