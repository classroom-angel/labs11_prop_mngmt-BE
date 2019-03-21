const router = require('express').Router();
const { register } = require('../../db/helpers');

router.post('', register);

module.exports = router;
