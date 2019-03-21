const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { name, city, country, expectedHours } = req.body;

    const orgResponse = await db('organizations').insert({
      name,
      city,
      country,
      expected_hours: expectedHours
    });

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
