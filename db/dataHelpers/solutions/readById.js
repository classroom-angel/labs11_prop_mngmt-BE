const db = require('../../dbConfig');

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    const solution = await db('solutions')
      .where({ id })
      .first();
    if (solution) {
      res.status(200).json({ solution });
    } else {
      res.status(404).json({ error: 'No solution was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readById;
