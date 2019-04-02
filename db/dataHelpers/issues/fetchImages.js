const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const fetchImages = async (req, res) => {
  try {
    const issueId = req.params.id;

    let images = await db('images').where({ issue_id: issueId });
    if (images) {
      images = images.map(path => keysToCamelCase(path));
      res.status(200).json({ images });
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
