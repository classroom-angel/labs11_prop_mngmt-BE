const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  const { name, date, time, organizationId, issueId } = req.body;
  try {
    let [solution] = await db('solutions')
      .insert({
        name,
        date,
        time,
        organization_id: organizationId
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
    if (!name || !organizationId || !issueId) {
      res.status(422).json({
        error: 'Required boy information: name, organizationId, issueId'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = create;
