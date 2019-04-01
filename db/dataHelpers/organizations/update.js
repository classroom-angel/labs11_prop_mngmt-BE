const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  const { name, city, country, expectedHours } = req.body;
  try {
    const { id } = req.params;

    let [organization] = await db('organizations')
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
    if (!name || !city || !country || !expectedHours) {
      res.status(422).json({
        error: 'Required body information: name, city, country, expectedHours'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = update;
