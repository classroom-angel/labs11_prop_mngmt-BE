const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const readById = async (req, res) => {
  try {
    const { id } = req.params;
    let solution = await db('solutions')
      .where({ id })
      .first();
    if (solution) {
      solution = keysToCamelCase(solution);

      var { issue_id: issueId } = await db('issues_join_solutions')
        .where({
          solution_id: id
        })
        .first();
    } else {
      res.status(404).json({ error: 'No solution was found.' });
    }

    res.status(200).json({ solution, issueId });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = readById;
