const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const {
  helpers: { readByName }
} = require('../organizations');

const register = async (req, res) => {
  const { username, firstName, lastName, role, organizationName } = req.body;
  try {
    const { id } = await readByName(organizationName);

    let [user] = await db('users')
      .insert({
        username,
        first_name: firstName,
        last_name: lastName,
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
    if (!username || !firstName || !lastName || !role || !organizationName) {
      res.status(422).json({
        error:
          'Required body information: username, firstName, lastName, role, organizationName'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = register;
