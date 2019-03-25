const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { lastIn, lastOut, expectedHours, totalMinutesMissed } = req.body;

    const updateResponse = await db('teacher_attendance')
      .where({ id })
      .update({
        last_in: lastIn,
        last_out: lastOut,
        expected_hours: expectedHours,
        total_minutes_missed: totalMinutesMissed
      });

    if (updateResponse) {
      res.status(200).json({ updateResponse });
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
