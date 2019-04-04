const router = require('express').Router();
const { stripe, postCharge } = require('../../db/dataHelpers/stripe');

router.use('/connect', require('./connect'));

router.get('', (req, res) => {
  res.json({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString()
  });
});

router.post('', (req, res) => {
  stripe.charges.create(req.body, postCharge(res));
});

module.exports = router;
