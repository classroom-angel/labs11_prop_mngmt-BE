const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const readAll = async (req, res) => {
  try {
    let images = await db('images');
    if (images.length) {
      images = images.map(item => keysToCamelCase(item));
      res.status(200).json({ images });
    } else {
      res.status(404).json({ error: 'No images found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readAll;
