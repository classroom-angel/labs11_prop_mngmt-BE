const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      date,
      name,
      notes,
      status,
      isVisit,
      organizationId,
      equipmentId
    } = req.body;

    const [issue] = await db('issues')
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

    if (issue) {
      if (equipmentId) {
        var [equipmentJoinIssue] = await db('equipment_join_issues')
          .where('issue_id', id)
          .update({ equipment_id: equipmentId })
          .returning('*');
      }
    } else {
      res.status(400).json({ error: 'Could not update issue in database.' });
    }

    res.status(200).json({ issue, equipmentJoinIssue });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
