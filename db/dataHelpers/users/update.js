const db = require('../../dbConfig');
const {
  helpers: { readByName }
} = require('../organizations');
const bcrypt = require('bcryptjs');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      firstName,
      lastName,
      password,
      role,
      organizationName
    } = req.body;

    if (orgId) {
      var { orgId } = readByName(organizationName);
    }

    if (password) {
      var hash = bcrypt.hashSync(password, Number(process.env.HASH_SALT) || 12);
    }

    const [user] = await db('users')
      .where('id', id)
      .update({
        username,
        first_name: firstName,
        last_name: lastName,
        password: hash,
        role,
        organization_id: orgId
      })
      .returning('*');

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: 'Could not update user in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
