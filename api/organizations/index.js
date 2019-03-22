const router = require('express').Router();
const { createOrganization } = require('../../db/dataHelpers');

router.post('', createOrganization);

module.exports = router;
