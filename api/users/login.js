const router = require('express').Router();
const { login } = require('../../db/dataHelpers/users');

router.get('', login);

module.exports = router;
