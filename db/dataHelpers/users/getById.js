const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db('users')
      .where({ id })
      .first();
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ error: 'No user was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
