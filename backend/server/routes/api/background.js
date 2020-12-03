import express from 'express';
import path from 'path';
import fs from 'fs';

var router = express.Router();

router.get('/', (req, res, next) => {
  const uri = path.join(__dirname, '../../../public/images/');
  fs.readdir(uri, (err, files) => {
    const file = files[Math.floor(files.length * Math.random())];
    res.sendFile(uri+file);
  });
});

export default router;
