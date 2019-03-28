const router = require('express').Router();
const configureStripe = require('stripe');
const stripe = configureStripe(process.env.STRIPE_DEV_KEY);

router.get('', (req, res) => {
  res.json({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString()
  });
});

const postStripeCharge = res => (error, stripeRes) => {
  if (error) {
    res.status(500).json({ error });
  } else {
    res.json({ success: stripeRes });
  }
};

router.post('', (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(res));
});

module.exports = router;
