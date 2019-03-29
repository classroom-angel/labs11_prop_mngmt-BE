const configureStripe = require('stripe');

const stripe = configureStripe(process.env.STRIPE_DEV_KEY);

const postCharge = res => (error, stripeRes) => {
  if (error) {
    res.status(500).json({ error });
  } else {
    res.json({ success: stripeRes });
  }
};

module.exports = {
  stripe,
  postCharge
};
