const create = require('./create');
const read = require('./read');
const readById = require('./readById');
const update = require('./update');
const deleted = require('./deleted');
const fetchImages = require('./fetchImages');
const createImages = require('./createImages');

module.exports = {
  create,
  read,
  readById,
  update,
  deleted,
  fetchImages,
  createImages
};
