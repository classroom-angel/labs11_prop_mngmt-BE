const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async ({ paths, issueId }) => {
  try {
    const images = await db('images')
      .insert(paths.map(path => ({ path, issue_id: issueId })))
      .returning('*');

    if (images.length) {
      return images.map(image => keysToCamelCase(image));
    } else return null;
  } catch (err) {
    return err;
  }
};

const readAll = require('./readAll');

module.exports = {
  create,
  readAll
};
