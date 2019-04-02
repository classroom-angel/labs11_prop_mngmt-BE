const router = require('express').Router();
const formData = require('express-form-data');
const cloudinary = require('cloudinary').v2;

router.post('', formData.parse(), ({ files }, res) => {
  const images = Object.values(files);
  const results = images.map(image => cloudinary.uploader.upload(image.path));
  Promise.all(results).then(result => res.json(result));
});

module.exports = router;
