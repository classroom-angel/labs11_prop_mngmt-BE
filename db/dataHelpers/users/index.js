const create = require('./create');
const read = require('./read');
const login = require('./login');
const generateToken = require('./generateToken');

module.exports = {
  create,
  read,
  login,
  helpers: {
    generateToken
  }
};
