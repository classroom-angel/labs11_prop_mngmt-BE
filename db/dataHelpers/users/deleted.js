const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    const [user] = await db('users')
      .where('id', id)
      .del()
      .returning('*');

    if (user) {
      user = keysToCamelCase(user);
      res.status(200).json({ user });
    } else {
      res.status(400).json({
        error: "You are trying to delete something that's not there."
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = deleted;
