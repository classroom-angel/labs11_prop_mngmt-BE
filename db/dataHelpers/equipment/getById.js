const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await db('equipment')
      .where({ id })
      .first();
    if (equipment) {
      res.status(200).json({ equipment });
    } else {
      res.status(404).json({ error: 'No equipment found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
