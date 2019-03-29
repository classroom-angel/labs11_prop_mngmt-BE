const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  try {
    const { name, city, country, expectedHours } = req.body;

    let [organization] = await db('organizations')
      .insert({
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
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
