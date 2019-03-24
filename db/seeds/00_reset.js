const fs = require('fs');
const path = require('path');
const migrations = '../migrations/';
const { reset } = require('../dataHelpers/seeds');

exports.seed = knex =>
  fs.readdir(path.resolve(__dirname, migrations), (err, files) =>
    files.forEach(file => {
      const start = file.indexOf('_') + 1;
      const end = file.indexOf('.');
      file = file
        .slice(start, end)
        .replace(/[A-Z]/g, letter => '_' + letter.toLowerCase());
      reset(file)(knex);
    })
  );
