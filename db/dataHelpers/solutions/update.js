const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time } = req.body;

    const updateResponse = await db('solutions')
      .where({ id })
      .update({
        date,
        time
      });

    if (updateResponse) {
      res.status(200).json({ updateResponse });
    } else {
      res.status(400).json({ error: 'Could not update solution in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
