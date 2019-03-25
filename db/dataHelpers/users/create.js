const db = require('../../dbConfig');
const {
  helpers: { readByName }
} = require('../organizations');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  // try {
  const {
    username,
    firstName,
    lastName,
    password,
    role,
    organizationName
  } = req.body;

  const hash = bcrypt.hashSync(password, Number(process.env.HASH_SALT) || 12);

  const { id } = readByName(organizationName);

  const userResponse = await db('users').insert({
    username,
    first_name: firstName,
    last_name: lastName,
    password: hash,
    role,
    organization_id: id
  });

  if (userResponse) {
    res.status(200).json({ userResponse });
  } else {
    res.status(400).json({ error: 'You probably did a bad with your data.' });
  }
  // } catch (error) {
  //   res.status(500).json({ error });
  // }
};

module.exports = register;
