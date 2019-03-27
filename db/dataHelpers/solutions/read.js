const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinIssue = require('./joinIssue');

const read = async (req, res) => {
  try {
    let solutions = await db('solutions');
    if (solutions.length) {
      solutions = solutions.map(solution => keysToCamelCase(solution));
      solutions = solutions.map(solution => joinIssue(solution));
      res.status(200).json({ solutions });
    } else {
      res.status(404).json({ error: 'No solutions were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
