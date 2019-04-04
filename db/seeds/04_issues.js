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
  name: 'Desk leg is broken',
  notes: 'It is all wobbly and stuff',
  is_visit: true,
  status: 'ignored',
  organization_id: 1
}, {}, {
  name: 'Macbook has red dot on screen',
  notes: 'Will handle in summer',
  is_visit: true,
  status: 'ignored',
  organization_id: 1
}, {}, {
  name: 'It will not turn on',
  notes: 'Will handle in summer',
  is_visit: true,
  status: 'ignored',
  organization_id: 1
}, {}, {
  name: 'Cafeteria missing a knife',
  notes: 'Will handle in summer',
  is_visit: true,
  status: 'ignored',
  organization_id: 1
}, {
  name: 'Page missing from this book',
  notes: 'There are so many!',
  organization_id: 2
});

const {
  makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues', fakeIssues);