const db = require('../../dbConfig');

const read = async (req, res) => {
  try {
    const tags = await db('tags');
    if (tags.length) {
      res.status(200).json({ tags });
    } else {
      res.status(404).json({ error: 'No tags were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
