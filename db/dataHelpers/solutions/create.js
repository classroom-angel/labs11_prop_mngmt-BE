const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { date, time } = req.body;

    const issueResponse = await db('solutions').insert({
      date,
      time
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
