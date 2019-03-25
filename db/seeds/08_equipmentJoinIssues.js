const fakeEquipmentJoinIssues = [];

fakeEquipmentJoinIssues.push({
  equipment_id: 2,
  issue_id: 2
});

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('equipment_join_issues', fakeEquipmentJoinIssues);
