const fakeSolutions = [];

fakeSolutions.push({
    name: 'More desks',
    organization_id: 1
}, {
    name: 'Projector Repair',
    organization_id: 2,
    date: "04_02_19",
    time: "5:16 PM"
}, {
    name: 'New books',
    organization_id: 10,
    date: "04_03_19",
    time: "5:16 PM"
}, {
    name: 'Smoke alarms',
    organization_id: 1,
    date: "04_04_19",
    time: "5:16 PM"
}, {
    name: 'Science Lab Materials',
    organization_id: 2,
    date: "04_05_19",
    time: "5:16 PM"
}, {
    name: 'Art Easels',
    organization_id: 10,
    date: "04_08_19",
    time: "5:16 PM"
}, {
    name: 'Desk chairs',
    organization_id: 1,
    date: "04_09_19",
    time: "5:16 PM"
}, {
    name: 'Whiteboards',
    organization_id: 2,
    date: "04_10_19",
    time: "5:16 PM"
}, {
    name: 'Chalkboard Replacement',
    organization_id: 10,
    date: "04_11_19",
    time: "5:16 PM"
}, {
    name: 'Projector Screens',
    organization_id: 10,
    date: "04_12_19",
    time: "5:16 PM"
}, {
    name: 'Pulldown Maps',
    organization_id: 1,
    date: "04_15_19",
    time: "5:16 PM"
}, {
    name: 'Pencil Sharpeners',
    organization_id: 2,
    date: "04_16_19",
    time: "5:16 PM"
}, {
    name: 'Locker Repair',
    organization_id: 10,
    date: "04_17_19",
    time: "5:16 PM"
}, {
    name: 'Music stands',
    organization_id: 1,
    date: "04_18_19",
    time: "5:16 PM"
});

const {
    makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('solutions', fakeSolutions);