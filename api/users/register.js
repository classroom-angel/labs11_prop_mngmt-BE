const router = require('express').Router();
const { createUser } = require('../../db/dataHelpers');

router.post('', createUser);

module.exports = router;
