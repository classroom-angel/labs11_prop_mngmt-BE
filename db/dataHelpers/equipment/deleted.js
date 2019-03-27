const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    const [equipment] = await db('equipment')
      .where({ id })
      .del()
      .returning('*');

    if (equipment) {
      equipment = keysToCamelCase(equipment);
      res.status(200).json({ equipment });
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
