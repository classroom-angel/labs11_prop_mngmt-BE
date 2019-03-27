const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const read = async (req, res) => {
  try {
    let users = await db('users');
    if (users.length) {
      users = users.map(user => keysToCamelCase(user));
      res.status(200).json({ users });
    } else {
      res.status(404).json({ error: 'No users were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
