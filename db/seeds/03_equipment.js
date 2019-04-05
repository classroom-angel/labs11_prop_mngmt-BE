const fakeEquipment = [];

fakeEquipment.push({
  name: 'Knives',
  description: "Not for children, but we still have 'em!",
  working: 36,
  damaged: 0,
  organization_id: 1
}, {
  name: 'Books',
  description: "Torn or somethng",
  working: 12,
  damaged: 5,
  organization_id: 1
}, {
  name: 'MacBook',
  description: "Screen is messy",
  working: 100,
  damaged: 3,
  organization_id: 1
}, {
  name: 'Chairs',
  description: "There's a shortage",
  working: 2,
  damaged: 1,
  organization_id: 1
}, {
  name: 'Ladders',
  description: "Too tall",
  working: 12,
  damaged: 44,
  organization_id: 1
}, {
  name: 'Desks',
  description: "Use 'em for sitting and working",
  working: 245,
  damaged: 55,
  organization_id: 2
});

const {
  makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('equipment', fakeEquipment);