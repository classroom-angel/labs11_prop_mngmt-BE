const create = require('./create');
const deleted = require('./deleted');
const read = require('./read');
const readById = require('./readById');
const update = require('./update');
const readByName = require('./readByName');
const readByOrg = require('./readByOrg');

module.exports = {
  create,
  read,
  readById,
  update,
  deleted,
  readByOrg,
  helpers: {
    readByName
  }
};
