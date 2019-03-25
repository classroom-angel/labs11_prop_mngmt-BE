const router = require('express').Router();
const { create } = require('../../db/dataHelpers/users');

router.post('', create);

module.exports = router;
