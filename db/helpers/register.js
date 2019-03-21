const db = require('../dbConfig');

const register = async (req, res) => {
  try {
    const user = await db('users').insert(req.body);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = register;
