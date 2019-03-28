const db = require('../../dbConfig');

const login = async (req, res) => {
  try {
    const { username } = req.body;

    db('users')
      .where('username', username)
      .first()
      .then(user => {
        if (user) {
          res.status(200).json({ user });
        } else {
          res.status(401).json({ error: 'You shall not pass!' });
        }
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = login;
