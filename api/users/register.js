const router = require('express').Router();
const { createUser } = require('../../db/helpers');

router.post('', createUser);

module.exports = router;
