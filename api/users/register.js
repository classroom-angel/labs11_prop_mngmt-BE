const router = require('express').Router();
const { register } = require('../../db/dataHelpers');

router.post('', register);

module.exports = router;
