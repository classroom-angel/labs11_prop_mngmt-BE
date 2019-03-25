const db = require('../../dbConfig');

const read = async (req, res) => {
  try {
    const organizations = await db('organizations');
    if (organizations.length) {
      res.status(200).json({ organizations });
    } else {
      res.status(404).json({ error: 'No organizations were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
