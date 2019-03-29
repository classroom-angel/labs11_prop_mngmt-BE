const { forEachFile, camelToSnakeCase } = require('../dataHelpers');
const { reset } = require('../dataHelpers/seeds');

exports.seed = knex =>
  forEachFile(__dirname, '../migrations/', file => {
    const start = file.indexOf('_') + 1;
    const end = file.indexOf('.');
    file = camelToSnakeCase(file.slice(start, end));
    reset(file)(knex);
  });
