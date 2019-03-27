const fakeSolutions = [];

fakeSolutions.push({ name: 'More desks' });

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('solutions', fakeSolutions);
