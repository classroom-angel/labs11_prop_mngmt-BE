const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const read = async (req, res) => {
  try {
    let attendance = await db('teacher_attendance');
    if (attendance.length) {
      attendance = attendance.map(record => keysToCamelCase(record));
      res.status(200).json({ attendance });
    } else {
      res.status(404).json({ error: 'No attendance records were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
