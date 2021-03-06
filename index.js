const express = require('express');
const cors = require('cors');
const server = express();

const DEV_URLS = ['http://localhost:3000'];
const PROD_URLS = ['https://www.classroomangel.us'];

const whitelist = process.env.NODE_ENV === 'production' ? PROD_URLS : DEV_URLS;

const corsOptions = {
  origin: (origin, cb) => {
    // return whitelist.indexOf(origin) !== -1
    // ? cb(null, true);
    // : cb(new Error('Not allowed by CORS'));
    return cb(null, true);
  }
};

server.use(cors(corsOptions));
server.use(express.json());
server.use('/api', require('./api'));

server.get('', (req, res) => {
  res.json({
    success: `You're not insane! See the API docs at: https://classroomangeldocs.surge.sh`
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

module.exports = server;
