const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { id, lastIn, lastOut, expectedHours, totalMinutesMissed } = req.body;
    const [attendance] = await db('teacher_attendance')
      .insert({
        id,
        last_in: lastIn,
        last_out: lastOut,
        expected_hours: expectedHours,
        total_minutes_missed: totalMinutesMissed
      })
      .returning('*');

    if (attendance) {
      res.status(200).json({ attendance });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
