const router = require('express').Router();
const formData = require('express-form-data');
const cloudinary = require('cloudinary').v2;
const { create } = require('../../db/dataHelpers/images');

router.post('', formData.parse(), ({ files, body: { issueId } }, res) => {
  let [images] = Object.values(files);
  if (!Array.isArray(images)) images = [images];
  const results = images.map(image => cloudinary.uploader.upload(image.path));
  Promise.all(results).then(async cloud => {
    try {
      const paths = cloud.map(
        ({ public_id, format }) => `${public_id}.${format}`
      );
      const local = await create({ paths, issueId });
      res.json({ cloud, local });
    } catch (error) {
      res.status(500).json({ error });
    }
  });
});

module.exports = router;
