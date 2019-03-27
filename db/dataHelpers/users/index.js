const login = require('./login');
const create = require('./create');
const read = require('./read');
const update = require('./update');
const deleted = require('./deleted');
const generateToken = require('./generateToken');

module.exports = {
  login,
  create,
  read,
  update,
  deleted,
  helpers: {
    generateToken
  }
};
