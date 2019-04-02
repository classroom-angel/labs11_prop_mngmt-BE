const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const {
  helpers: { readByName }
} = require('../organizations');

const create = async (req, res) => {
  const { name, description, working, damaged, organizationName } = req.body;
  try {
    const { id } = await readByName(organizationName);

    let [equipment] = await db('equipment')
      .insert({
        name,
        description,
        working,
        damaged,
        organization_id: id
      })
      .returning('*');

    if (equipment) {
      equipment = keysToCamelCase(equipment);
      res.status(200).json({ equipment });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    if (!name || !description || !working || !damaged || !organizationName) {
      res
        .status(422)
        .json({
          error:
            'Required body information: name, description, working, damaged, organizationName'
        });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = create;
