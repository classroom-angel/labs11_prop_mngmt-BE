const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const tagResponse = await db('tags').insert({
      name
    });

    if (tagResponse) {
      res.status(200).json({ tagResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
