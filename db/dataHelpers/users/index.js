const create = require('./create');
const read = require('./read');
const login = require('./login');
const deleted = require('./deleted');
const generateToken = require('./generateToken');

module.exports = {
  create,
  read,
  login,
  deleted,
  helpers: {
    generateToken
  }
};
