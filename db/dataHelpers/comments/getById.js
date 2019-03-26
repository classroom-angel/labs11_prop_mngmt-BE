const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await db('comments')
      .where({ id })
      .first();
    if (comment) {
      res.status(200).json({ comment });
    } else {
      res.status(404).json({ error: 'No comment found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
