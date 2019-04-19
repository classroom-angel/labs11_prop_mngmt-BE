const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const readByOrg = tableName => async (req, res) => {
  try {
    const { id } = req.params;
    let items = await db(tableName).where({ organization_id: id });
    if (items) {
      items = items.map(item => keysToCamelCase(item));
      res.status(200).json({ [tableName]: items });
    } else {
      res.status(404).json({ error: `No ${tableName} found.` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readByOrg;
