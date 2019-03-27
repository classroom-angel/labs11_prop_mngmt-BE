const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinIssue = require('./joinIssue');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    let [tag] = await db('tags')
      .where({ id })
      .del()
      .returning('*');

    if (tag) {
      tag = keysToCamelCase(tag);
      tag = joinIssue(tag);
      res.status(200).json({ tag });
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
