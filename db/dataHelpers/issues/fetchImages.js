const db = '../../dbConfig';
const { keysToCamelCase } = require('../');

const fetchImages = async (req, res) => {
  try {
    const { issueId } = req.body;

    const imagePaths = await db('images').where({ issue_id, issueId });
    if (imagePaths) {
      imagePaths = keysToCamelCase(imagePaths);
      res.status(200).json({ imagePaths });
    } else {
      res
        .status(400)
        .json({ error: 'Could not find image paths in the database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = fetchImages;
