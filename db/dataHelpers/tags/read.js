const db = require('../../dbConfig');

const read = async (req, res) => {
  try {
    const issues = await db('tags');
    if (issues.length) {
      res.status(200).json({ issues });
    } else {
      res.status(404).json({ error: 'No tags were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
