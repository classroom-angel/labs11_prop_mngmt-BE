const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, name, notes, status, isVisit } = req.body;

    const updateResponse = await db('issues')
      .where('issue_id', id)
      .update({
        date,
        name,
        notes,
        status,
        is_visit: isVisit
      });

    if (updateResponse) {
      res.status(200).json({ updateResponse });
    } else {
      res.status(400).json({ error: 'Could not update issue in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
