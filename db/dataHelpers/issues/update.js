const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
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
    const { id } = req.params;

    if (
      date ||
      name ||
      notes ||
      status ||
      isVisit !== undefined ||
      organizationId
    ) {
      var [issue] = await db('issues')
        .where({ id })
        .update({
          date,
          name,
          notes,
          status,
          is_visit: isVisit,
          organization_id: organizationId
        })
        .returning('*');
      issue = keysToCamelCase(issue);
    }

    if (equipmentId) {
      var [equipmentJoinIssue] = await db('equipment_join_issues')
        .where('issue_id', id)
        .update({ equipment_id: equipmentId })
        .returning('*');
      equipmentJoinIssue = keysToCamelCase(equipmentJoinIssue);
    }

    res.status(200).json({ issue, equipmentJoinIssue });
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

module.exports = update;
