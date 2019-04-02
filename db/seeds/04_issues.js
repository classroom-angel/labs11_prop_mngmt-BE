const fakeIssues = [];

fakeIssues.push({
  name: 'Karen visit',
  notes: 'Clean up!',
  is_visit: true,
  organization_id: 1
}, {
  name: 'Need more books',
  notes: 'Will order',
  is_visit: true,
  status: 'scheduled',
  organization_id: 1
}, {
  name: 'AC is broken',
  notes: 'Will handle in summer',
  is_visit: true,
  status: 'ignored',
  organization_id: 1
}, {
  name: 'Broken desks',
  notes: 'There are so many!',
  organization_id: 2
});

const {
  makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues', fakeIssues);