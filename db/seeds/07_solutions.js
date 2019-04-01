const fakeSolutions = [];

fakeSolutions.push({ name: 'More desks', organization_id: 1 });

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('solutions', fakeSolutions);
