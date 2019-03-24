const fs = require('fs');
const path = require('path');
const router = require('express').Router();

fs.readdir(path.resolve(__dirname, './'), (err, files) =>
  files.forEach(file => {
    const theWay = `./${file}`;
    router.use(theWay.slice(1), require(theWay));
  })
);

// router.use('/organizations', require('./organizations'));
// router.use('/users', require('./users'));
// router.use('/equipment', require('./equipment'));
// router.use('/issues', require('./issues'));

module.exports = router;
