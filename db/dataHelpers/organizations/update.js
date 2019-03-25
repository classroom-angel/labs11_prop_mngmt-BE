const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, country, expectedHours } = req.body;

    const updateResponse = await db('organizations')
      .where({ id })
      .update({
        name,
        city,
        country,
        expected_hours: expectedHours
      });

    if (updateResponse) {
      res.status(200).json({ updateResponse });
    } else {
      res
        .status(400)
        .json({ error: 'Could not update organization in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
