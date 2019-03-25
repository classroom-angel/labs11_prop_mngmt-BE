const fakeEquipment = [];

fakeEquipment.push(
  {
    name: 'Knives',
    description: "Not for children, but we still have 'em!",
    working: 36,
    damaged: 0,
    organization_id: 1
  },
  {
    name: 'Desks',
    description: "Use 'em for sitting and working",
    working: 245,
    damaged: 55,
    organization_id: 2
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('equipment', fakeEquipment);
