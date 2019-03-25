const router = require('express').Router();
const { create } = require('../../db/dataHelpers/equipment');

router.post('', create);

module.exports = router;
