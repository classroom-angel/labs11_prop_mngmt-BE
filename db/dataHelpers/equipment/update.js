const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  const { name, description, working, damaged, organizationId } = req.body;
  try {
    const { id } = req.params;

    let [equipment] = await db('equipment')
      .where({ id })
      .update({
        name,
        description,
        working,
        damaged,
        organization_id: organizationId
      })
      .returning('*');

    if (equipment) {
      equipment = keysToCamelCase(equipment);
      res.status(200).json({ equipment });
    } else {
      res
        .status(400)
        .json({ error: 'Could not update equipment in database.' });
    }
  } catch (error) {
    if (!name || !description || !working || !damaged || !organizationName) {
      res.status(422).json({
        error:
          'Required body information: name, description, working, damaged, organizationName'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = update;
