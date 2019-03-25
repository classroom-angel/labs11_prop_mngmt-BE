const { forEachFile } = require('../dataHelpers');
const { reset } = require('../dataHelpers/seeds');

exports.seed = knex =>
  forEachFile(__dirname, '../migrations/', file => {
    const start = file.indexOf('_') + 1;
    const end = file.indexOf('.');
    file = file
      .slice(start, end)
      .replace(/[A-Z]/g, letter => '_' + letter.toLowerCase());
    reset(file)(knex);
  });
