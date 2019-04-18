const fakeSolutions = [];

fakeSolutions.push(
  {
    name: 'More desks',
    organization_id: 1
  },
  {
    name: 'Projector Repair',
    organization_id: 2,
    date: '04-02-19',
    time: '5:16 PM'
  },
  {
    name: 'New books',
    organization_id: 1,
    date: '04-03-19',
    time: '5:16 PM'
  },
  {
    name: 'Smoke alarms',
    organization_id: 2,
    date: '04-04-19',
    time: '5:16 PM'
  },
  {
    name: 'Science Lab Materials',
    organization_id: 2,
    date: '04-05-19',
    time: '5:16 PM'
  },
  {
    name: 'Art Easels',
    organization_id: 1,
    date: '04-08-19',
    time: '5:16 PM'
  },
  {
    name: 'Desk chairs',
    organization_id: 1,
    date: '04-09-19',
    time: '5:16 PM'
  },
  {
    name: 'Whiteboards',
    organization_id: 2,
    date: '04-10-19',
    time: '5:16 PM'
  },
  {
    name: 'Chalkboard Replacement',
    organization_id: 1,
    date: '04-11-19',
    time: '5:16 PM'
  },
  {
    name: 'Projector Screens',
    organization_id: 1,
    date: '04-12-19',
    time: '5:16 PM'
  },
  {
    name: 'Pulldown Maps',
    organization_id: 1,
    date: '04-15-19',
    time: '5:16 PM'
  },
  {
    name: 'Pencil Sharpeners',
    organization_id: 2,
    date: '04-16-19',
    time: '5:16 PM'
  },
  {
    name: 'Locker Repair',
    organization_id: 1,
    date: '04-17-19',
    time: '5:16 PM'
  },
  {
    name: 'Music stands',
    organization_id: 1,
    date: '04-18-19',
    time: '5:16 PM'
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('solutions', fakeSolutions);
