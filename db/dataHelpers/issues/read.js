const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');
const joinEquipment = require('./joinEquipment');

const read = async (req, res) => {
  try {
    let issues = await db('issues');
    if (issues.length) {
      issues = issues.map(issue => keysToCamelCase(issue));

      issues = issues.map(joinEquipment);
      issues = await Promise.all(issues);
      issues.sort((a, b) => {
        let [aMonth, aDay, aYear] = a.date.split('-');
        let [bMonth, bDay, bYear] = b.date.split('-');

        if (aYear !== bYear) return bYear - aYear;
        if (aMonth !== bMonth) return bMonth - aMonth;
        else return bDay - aDay;
      });

      res.status(200).json({ issues });
    } else {
      res.status(404).json({ error: 'No issues were found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = read;
