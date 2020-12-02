import express from 'express';
import path from 'path';
import fs from 'fs';

var router = express.Router();

router.get('/', (req, res, next) => {
  const uri = path.join(__dirname, '../../../public/images');
  fs.readdir(uri, (err, files) => {
    res.json(files);
  });
});

export default router;
