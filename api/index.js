const router = require('express').Router();
const { forEachFile } = require('../db/dataHelpers');

const pathway = './';
forEachFile(__dirname, pathway, file => {
  const path = pathway + file;
  router.use(path.slice(1), require(path));
});

module.exports = router;
