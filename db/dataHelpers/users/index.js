const login = require('./login');
const create = require('./create');
const read = require('./read');
const readById = require('./readById');
const update = require('./update');
const deleted = require('./deleted');

module.exports = {
  login,
  create,
  read,
  readById,
  update,
  deleted
};
