const router = require('express').Router();
const { readAll } = require('../../db/dataHelpers/images');

router.get('', readAll);

module.exports = router;
