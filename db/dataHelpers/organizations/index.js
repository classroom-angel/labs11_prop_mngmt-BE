const create = require('./create');
const deleted = require('./deleted');
const read = require('./read');
const readById = require('./readById');
const update = require('./update');
const readByName = require('./readByName');

module.exports = {
  create,
  read,
  readById,
  update,
  deleted,
  helpers: {
    readByName
  }
};
