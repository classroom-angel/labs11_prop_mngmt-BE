const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  const {
    date,
    name,
    notes,
    status,
    isVisit,
    organizationId,
    equipmentId
  } = req.body;
  try {
    let [issue] = await db('issues')
      .insert({
        date,
        name,
        notes,
        status,
        is_visit: isVisit,
        organization_id: organizationId
      })
      .returning('*');

    if (issue) {
      issue = keysToCamelCase(issue);
      if (equipmentId) {
        var [equipmentJoinIssue] = await db('equipment_join_issues')
          .insert({
            equipment_id: equipmentId,
            issue_id: issue.id
          })
          .returning('*');
        equipmentJoinIssue = keysToCamelCase(equipmentJoinIssue);
      }

      res.status(200).json({ issue, equipmentJoinIssue });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    if (
      !date ||
      !name ||
      !notes ||
      !status ||
      !isVisit ||
      !organizationId ||
      !equipmentId
    ) {
      res.status(422).json({
        error:
          'Required body information: date, name, noted, status, isVisit, organizationId, equipmentId'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = create;
