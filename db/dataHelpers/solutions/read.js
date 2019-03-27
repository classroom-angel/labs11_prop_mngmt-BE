const db = require('../../dbConfig');

const read = async (req, res) => {
  try {
    const solutions = await db('solutions');
    if (solutions.length) {
      res.status(200).json({ solutions });
    } else {
      res.status(404).json({ error: 'No solutions were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
