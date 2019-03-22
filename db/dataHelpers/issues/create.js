const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { date, name, notes, status, isVisit } = req.body;

    const issueResponse = await db('issues').insert({
      date,
      name,
      notes,
      status,
      is_visit: isVisit
    });

    if (issueResponse) {
      res.status(200).json({ issueResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
