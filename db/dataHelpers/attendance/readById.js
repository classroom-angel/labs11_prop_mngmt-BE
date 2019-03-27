const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    let attendance = await db('teacher_attendance')
      .where({ id })
      .first();
    if (attendance) {
      attendance = keysToCamelCase(attendance);
      res.status(200).json({ attendance });
    } else {
      res.status(404).json({ error: 'No attendance record was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readById;
