const jwt = require('jsonwebtoken');

const generateToken = user => {
  const secret = process.env.JWT_SECRET || 'secret';
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: '1h',
    jwtid: `${process.env.JWTID || 1}`,
    subject: `${user.id}`
  };
  return jwt.sign(payload, secret, options);
};

module.exports = generateToken;
