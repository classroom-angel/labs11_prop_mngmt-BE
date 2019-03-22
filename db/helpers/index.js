const createOrganization = require('./organizations/create');
const createUser = require('./users/create');
const createEquipment = require('./equipment/create');
const createIssue = require('./issues/create');

module.exports = {
  createOrganization,
  createUser,
  createEquipment,
  createIssue
};
