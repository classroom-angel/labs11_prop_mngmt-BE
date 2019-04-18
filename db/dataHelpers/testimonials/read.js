const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const read = async (req, res) => {
  try {
    let testimonials = await db('testimonials');
    if (testimonials.length) {
      testimonials = testimonials.map(record => keysToCamelCase(record));
      res.status(200).json({
        testimonials
      });
    } else {
      res.status(404).json({
        error: 'No testimonials found.'
      });
    }
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

module.exports = read;
