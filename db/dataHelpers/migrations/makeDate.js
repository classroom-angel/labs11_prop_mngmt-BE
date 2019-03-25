const moment = require('moment');

const makeDate = dateStr => (dateStr ? moment(dateStr) : moment());

module.exports = makeDate;
