const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateResponse = await db('tags')
      .where({ id })
      .update({
        name
      });

    if (updateResponse) {
      res.status(200).json({ updateResponse });
    } else {
      res.status(400).json({ error: 'Could not update tag in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
