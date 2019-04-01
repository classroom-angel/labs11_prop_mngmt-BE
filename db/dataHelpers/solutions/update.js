const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, time, organizationId, issueId } = req.body;

    if (date || time) {
      var [solution] = await db('solutions')
        .where({ id })
        .update({
          name,
          date,
          time,
          organizationId
        })
        .returning('*');
      solution = keysToCamelCase(solution);
    }

    if (issueId) {
      var [issueJoinSolution] = await db('issues_join_solutions')
        .where({ solution_id: id })
        .update({
          issue_id: issueId
        })
        .returning('*');
      issueJoinSolution = keysToCamelCase(issueJoinSolution);
    }

    res.status(200).json({ solution, issueJoinSolution });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
