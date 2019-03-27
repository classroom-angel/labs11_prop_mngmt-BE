const router = require('express').Router();
const configureStripe = require('stripe');
const stripe = configureStripe(process.env.STRIPE_DEV_KEY);

router.get('', (req, res) => {
  res.json({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString()
  });
});

router.post('', (req, res) => {
  stripe.charges.create(req.body, res => (error, stripeRes) => {
    if (error) {
      res.status(500).json({ error });
    }

    res.json({ success: stripeRes });
  });
});

module.exports = router;
