const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  const { name, role, text } = req.body;
  try {
    let [testimonials] = await db('testimonials')
      .insert({
        name,
        role,
        text
      })
      .returning('*');
    if (testimonials) {
      testimonials = keysToCamelCase(testimonials);
      res.status(200).json({
        testimonials
      });
    } else {
      res.status(400).json({
        error: 'Cannot add testimonial.'
      });
    }
  } catch (error) {
    if (!name || !role || !text) {
      res.status(422).json({
        error: 'Required body information: name , role, text.'
      });
    } else {
      res.status(500).json({
        error
      });
    }
  }
};

module.exports = create;
