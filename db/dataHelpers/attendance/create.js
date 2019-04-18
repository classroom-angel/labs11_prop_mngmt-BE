const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  const { id, lastIn, lastOut, expectedHours, totalMinutesMissed } = req.body;
  try {
    let [attendance] = await db('teacher_attendance')
      .insert({
        id,
        last_in: lastIn,
        last_out: lastOut,
        expected_hours: expectedHours,
        total_minutes_missed: totalMinutesMissed
      })
      .returning('*');
    if (attendance) {
      attendance = keysToCamelCase(attendance);
      res.status(200).json({ attendance });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    if (!id || !lastIn || !lastOut || !totalMinutesMissed) {
      res.status(422).json({
        error:
          'Required body information: id, lastIn, lastOut, totalMinutesMissed.'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = create;
