const { create: createOrganization } = require('./organizations');
const { create: createUser, read: readUsers, login } = require('./users');
const { create: createEquipment } = require('./equipment');
const { create: createIssue, read: readIssues } = require('./issues');

module.exports = {
  createOrganization,
  createUser,
  readUsers,
  login,
  createEquipment,
  createIssue,
  readIssues
};
