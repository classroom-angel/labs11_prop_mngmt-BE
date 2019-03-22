const router = require('express').Router();
const { login } = require('../../db/dataHelpers');

router.get('', login);

module.exports = router;
