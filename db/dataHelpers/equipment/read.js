const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const read = async (req, res) => {
  try {
    const equipment = await db('equipment');
    if (equipment.length) {
      equipment = equipment.map(item => keysToCamelCase(item));
      res.status(200).json({ equipment });
    } else {
      res.status(404).json({ error: 'No equipment found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
