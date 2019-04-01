const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  const { name, date, time, organizationId, issueId } = req.body;
  try {
    const { id } = req.params;

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
    if (!name || !date || !time || !organizationId || !issueId) {
      res.status(422).json({
        error:
          'Required boy information: name, date, time, organizationId, issueId'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = update;
