const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await db('organizations')
      .where({ id })
      .first();
    if (organization) {
      res.status(200).json({ organization });
    } else {
      res.status(404).json({ error: 'No organization was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
