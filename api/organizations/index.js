const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  readById,
  readByOrg
} = require('../../db/dataHelpers/organizations');

router.post('', create);
router.get('', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', deleted);

['users', 'equipment', 'issues', 'tags', 'solutions'].forEach(table => {
  router.get(`/:id/${table}`, readByOrg(table));
});

module.exports = router;
