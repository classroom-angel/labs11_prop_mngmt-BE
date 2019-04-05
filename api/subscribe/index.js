const router = require('express').Router();
const { stripe, postCharge } = require('../../db/dataHelpers/stripe');

router.post('', async (req, res) => {
  const { email, description, source } = req.body;
  try {
    const customer = await stripe.customers.create({
      email,
      description,
      source
    });

    stripe.subscriptions.create(
      {
        customer: customer.id,
        items: [{ plan: process.env.STRIPE_PLAN_ID }]
      },
      postCharge(res)
    );
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
