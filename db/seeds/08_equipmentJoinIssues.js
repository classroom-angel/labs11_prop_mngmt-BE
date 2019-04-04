const fakeEquipmentJoinIssues = [];

fakeEquipmentJoinIssues.push({
  equipment_id: 2,
  issue_id: 2
}, {
  equipment_id: 6,
  issue_id: 3
}, {
  equipment_id: 3,
  issue_id: 4
}, {
  equipment_id: 3,
  issue_id: 5
}, {
  equipment_id: 1,
  issue_id: 6
}, {
  equipment_id: 2,
  issue_id: 7
});

const {
  makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('equipment_join_issues', fakeEquipmentJoinIssues);