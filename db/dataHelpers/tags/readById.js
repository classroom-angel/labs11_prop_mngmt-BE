const db = require('../../dbConfig');

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await db('tags')
      .where({ id })
      .first();
    if (tag) {
      res.status(200).json({ tag });
    } else {
      res.status(404).json({ error: 'No tag was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readById;
