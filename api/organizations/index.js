const router = require('express').Router();
const { create } = require('../../db/dataHelpers/organizations');

router.post('', create);

module.exports = router;
