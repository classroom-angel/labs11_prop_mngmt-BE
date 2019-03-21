const router = require('express').Router();
const { createOrganization } = require('../../db/helpers');

router.post('', createOrganization);

module.exports = router;
