const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, country, expectedHours } = req.body;

    const [organization] = await db('organizations')
      .where({ id })
      .update({
        name,
        city,
        country,
        expected_hours: expectedHours
      })
      .returning('*');

    if (organization) {
      organization = keysToCamelCase(organization);
      res.status(200).json({ organization });
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
