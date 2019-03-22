const makeSeed = require('./makeSeed');
const {
  helpers: { generateToken }
} = require('../users');

module.exports = {
  makeSeed,
  generateToken
};
