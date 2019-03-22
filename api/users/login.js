const router = require('express').Router();
const { login } = require('../../db/helpers');

router.get('', login);

module.exports = router;
