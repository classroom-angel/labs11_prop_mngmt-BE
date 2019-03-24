const db = require('../../dbConfig');

const read = async (req, res) => {
  try {
    const users = await db('users');
    if (users.length) {
      res.status(200).json({ users });
    } else {
      res.status(404).json({ error: 'No users were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;