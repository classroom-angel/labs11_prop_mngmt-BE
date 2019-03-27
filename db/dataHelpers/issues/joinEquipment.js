const joinEquipment = async issue => {
  const [equipmentJoinIssue] = await db('equipment_join_issues')
    .where({
      issue_id: issue.id
    })
    .returning('*');
  if (equipmentJoinIssue) {
    const [equipment] = await db('equipment')
      .where({
        id: equipmentJoinIssue.equipment_id
      })
      .returning('*');

    return { ...issue, equipmentId: equipment.id };
  }

  return issue;
};

module.exports = joinEquipment;
