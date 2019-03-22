const db = require('../../dbConfig');

const readByName = async name =>
  await db('organizations')
    .where({ name })
    .first();

module.exports = readByName;
