const router = require('express').Router();
const request = require('request');

router.post('', ({ body: { code } }, res) => {
  const data =
    `client_secret=${process.env.STRIPE_DEV_KEY}&` +
    `code=${code}&` +
    'grant_type=authorization_code';

  const options = {
    url: 'https://connect.stripe.com/oauth/token',
    method: 'POST',
    body: data
  };

  const handleData = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const { refresh_token, stripe_user_id } = body;
      res.json({
        refresh_token,
        stripe_user_id
      });
    } else res.status(500).json({ error });
  };

  request(options, handleData);
});

module.exports = router;
