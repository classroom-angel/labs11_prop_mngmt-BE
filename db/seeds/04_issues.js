const fakeIssues = [];

fakeIssues.push({
  name: 'Karen visit',
  notes: 'Clean up!',
  is_visit: true,
  organization_id: 1,
}, {
  name: 'Red dot on macbook screen',
  notes: 'Will order',
  is_visit: true,
  status: 'scheduled',
  organization_id: 1,
  equipmentId: 3
}, {
  name: 'Will not turn on',
  notes: 'Will handle in summer',
  status: 'ignored',
  organization_id: 1,
  equipmentId: 3
}, {
  name: 'Broken desk leg',
  notes: 'Needs grease',
  organization_id: 2,
  equipmentId: 6
});

const {
  makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues', fakeIssues);