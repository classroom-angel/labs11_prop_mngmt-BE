const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, working, damaged, organizationId } = req.body;

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
    res.status(500).json({ error });
  }
};

module.exports = update;
