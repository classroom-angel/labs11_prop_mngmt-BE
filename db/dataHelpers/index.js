/* GENERAL HELPERS */
const fs = require('fs');
const path = require('path');
const forEachFile = (dirname, pathway, callback) => {
  fs.readdir(path.resolve(dirname, pathway), (err, files) => {
    if (err) console.error(err);
    files.forEach(callback);
  });
};

const camelToSnakeCase = str =>
  str.replace(/[A-Z]/g, letter => '_' + letter.toLowerCase());

const snakeToCamelCase = str =>
  str
    .split('_')
    .map((word, ind) => {
      if (ind) {
        return word[0].toUpperCase() + word.slice(1);
      } else return word;
    })
    .join('');

const keysToCamelCase = obj => {
  const keys = Object.keys(obj);
  const newObj = {};

  for (let key of keys) {
    newObj[snakeToCamelCase(key)] = obj[key];
  }

  return newObj;
};

const db = require('../dbConfig');
const joinIssue = async (obj, table, single) => {
  const [joinIssue] = await db(`issues_join_${table}`)
    .where({ [`${single}_id`]: obj.id })
    .returning('*');

  if (joinIssue) {
    return { ...obj, issueId: joinIssue.issue_id };
  }

  return obj;
};

module.exports = {
  forEachFile,
  camelToSnakeCase,
  keysToCamelCase,
  joinIssue
};
