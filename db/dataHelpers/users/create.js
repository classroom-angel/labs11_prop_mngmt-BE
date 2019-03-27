const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const {
  helpers: { readByName }
} = require('../organizations');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      password,
      role,
      organizationName
    } = req.body;

    const hash = bcrypt.hashSync(password, Number(process.env.HASH_SALT) || 12);

    const { id } = await readByName(organizationName);

    let [user] = await db('users')
      .insert({
        username,
        first_name: firstName,
        last_name: lastName,
        password: hash,
        role,
        organization_id: id
      })
      .returning('*');

    if (user) {
      user = keysToCamelCase(user);
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = register;
