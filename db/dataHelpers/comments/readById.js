const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    let comment = await db('comments')
      .where({ id })
      .first();
    if (comment) {
      comment = keysToCamelCase(comment);
      res.status(200).json({ comment });
    } else {
      res.status(404).json({ error: 'No comment found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readById;
