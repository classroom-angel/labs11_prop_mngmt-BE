const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async ({ paths, issueId }) => {
  try {
    const images = await db('images')
      .insert(paths.map(path => ({ path, issue_id: issueId })))
      .returning('*');

    if (images.length) return keysToCamelCase(images);
    else return null;
  } catch (err) {
    return err;
  }
};

module.exports = {
  create
};
