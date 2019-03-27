const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { date, time, issueId } = req.body;

    const [solution] = await db('solutions')
      .insert({
        date,
        time
      })
      .returning('*');

    if (solution) {
      if (issueId) {
        var [issueJoinSolution] = await db('issues_join_solutions')
          .insert({
            issue_id: issueId,
            solution_id: solution.id
          })
          .returning('*');
      }
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }

    res.status(200).json({ solution, issueJoinSolution });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
