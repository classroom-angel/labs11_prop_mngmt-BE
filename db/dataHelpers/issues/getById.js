const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await db('issues')
      .where({ id })
      .first();
    if (issue) {
      res.status(200).json({ issue });
    } else {
      res.status(404).json({ error: 'No issue was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
