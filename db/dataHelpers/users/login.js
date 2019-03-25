const db = require('../../dbConfig');
const bcrypt = require('bcryptjs');

const generateToken = require('./generateToken');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    db('users')
      .where('user_name', username)
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json(token);
        } else {
          res.status(401).json({ error: 'You shall not pass!' });
        }
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = login;
