const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const read = async (req, res) => {
  try {
    const comments = await db('comments');
    if (comments.length) {
      comments = comments.map(comment => keysToCamelCase(comment));
      res.status(200).json({ comments });
    } else {
      res.status(404).json({ error: 'No comments found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
