const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinIssue = require('./joinIssue');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    let [solution] = await db('solutions')
      .where({ id })
      .del()
      .returning('*');

    if (solution) {
      solution = keysToCamelCase(solution);
      solution = await joinIssue(solution);
      res.status(200).json({ solution });
    } else {
      res.status(400).json({
        error: "You are trying to delete something that's not there."
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = deleted;
