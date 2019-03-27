const joinEquipment = async issue => {
  const [equipmentJoinIssue] = await db('equipment_join_issues')
    .where({
      issue_id: issue.id
    })
    .returning('*');

  if (equipmentJoinIssue) {
    return { ...issue, equipmentId: equipmentJoinIssue.equipment_id };
  }

  return issue;
};

module.exports = joinEquipment;
