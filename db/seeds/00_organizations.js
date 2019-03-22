const fakeOrganizations = [];

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('organizations', fakeOrganizations);
