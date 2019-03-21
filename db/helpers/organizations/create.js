const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const orgResponse = await db('organizations').insert(req.body);
    if (orgResponse) {
      res.status(200).json({ orgResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
