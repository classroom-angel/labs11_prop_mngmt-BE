const fakeOrganizations = [];

fakeOrganizations.push({
  name: 'Evil Corp',
  city: 'NYC',
  country: 'USA',
  expectedHours: 100
});

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('organizations', fakeOrganizations);
