const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinIssue = require('./joinIssue');

const read = async (req, res) => {
  try {
    const tags = await db('tags');
    if (tags.length) {
      tags = tags.map(tag => keysToCamelCase(tag));
      tags = tags.map(tag => joinIssue(tag));
      res.status(200).json({ tags });
    } else {
      res.status(404).json({ error: 'No tags were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
