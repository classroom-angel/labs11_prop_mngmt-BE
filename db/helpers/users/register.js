const db = require('../../dbConfig');

const register = async (req, res) => {
  try {
    const userResponse = await db('users').insert(req.body);
    if (userResponse) {
      res.status(200).json({ userResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = register;
