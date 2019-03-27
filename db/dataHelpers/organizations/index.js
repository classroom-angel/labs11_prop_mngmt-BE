const create = require('./create');
const deleted = require('./deleted');
const read = require('./read');
const update = require('./update');
const readByName = require('./readByName');

module.exports = {
  create,
  deleted,
  read,
  update,
  helpers: {
    readByName
  }
};
