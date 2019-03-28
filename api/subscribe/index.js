const router = require('express').Router();
const { stripe, postCharge } = require('../../db/dataHelpers/stripe');

router.post('', (req, res) => {
  const { email, source } = req.body;
  const customer = stripe.customers.create({
    email,
    source
  });

  stripe.subscriptions.create(
    {
      customer: customer.id,
      items: [{ plan: process.env.STRIPE_PLAN_ID }]
    },
    postCharge(res)
  );
});

module.exports = router;
