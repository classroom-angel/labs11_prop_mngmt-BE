const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { lastIn, lastOut, expectedHours, totalMinutesMissed } = req.body;

    let [attendance] = await db('teacher_attendance')
      .where({ id })
      .update({
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
      res
        .status(400)
        .json({ error: 'Could not update teacher attendance in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
