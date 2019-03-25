const router = require('express').Router();
const { create, read } = require('../../db/dataHelpers/issues');

router.use('/status', require('./status'));

router.get('', read);

router.post('', create);

module.exports = router;
