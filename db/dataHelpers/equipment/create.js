const db = require('../../dbConfig');
const {
  helpers: { readByName }
} = require('../organizations');

const create = async (req, res) => {
  try {
    const { name, description, working, damaged, organizationName } = req.body;

    const { id } = await readByName(organizationName);

    const equipmentResponse = await db('equipment').insert({
      name,
      description,
      working,
      damaged,
      organization_id: id
    });

    if (equipmentResponse) {
      res.status(200).json({ equipmentResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
