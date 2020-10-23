const express = require('express');
const router = express.Router();
const path = require('path');
const { getDirectoryContent, isDir } = require('../utils/fsUtils');

async function readMoviesDir() {
    return await getDirectoryContent(process.env.MEDIA_PATH);
}

router
  .route('/')
  .get(async(req, res) => {
    const data = await readMoviesDir();
    res.status(200);
    res.send({data});
  });



module.exports = router;