const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinEquipment = require('./joinEquipment');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    let [issue] = await db('issues')
      .where({ id })
      .del()
      .returning('*');

    if (issue) {
      issue = keysToCamelCase(issue);
      issue = await joinEquipment(issue);
      res.status(200).json({ issue });
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
