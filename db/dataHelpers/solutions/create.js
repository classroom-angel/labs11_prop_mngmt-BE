const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  try {
    const { name, date, time, organizationId, issueId } = req.body;

    let [solution] = await db('solutions')
      .insert({
        name,
        date,
        time,
        organizationId
      })
      .returning('*');

    if (solution) {
      solution = keysToCamelCase(solution);

      if (issueId) {
        var [issueJoinSolution] = await db('issues_join_solutions')
          .insert({
            issue_id: issueId,
            solution_id: solution.id
          })
          .returning('*');
        issueJoinSolution = keysToCamelCase(issueJoinSolution);
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
