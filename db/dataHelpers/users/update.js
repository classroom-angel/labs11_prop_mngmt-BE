const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const {
  helpers: { readByName }
} = require('../organizations');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, firstName, lastName, role, organizationName } = req.body;

    if (orgId) {
      var { orgId } = readByName(organizationName);
    }

    let [user] = await db('users')
      .where('id', id)
      .update({
        username,
        first_name: firstName,
        last_name: lastName,
        role,
        organization_id: orgId
      })
      .returning('*');

    if (user) {
      user = keysToCamelCase(user);
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: 'Could not update user in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
