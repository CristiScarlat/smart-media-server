const express = require('express');
const router = express.Router();
const movies = require('./movies');

router
  .route('/')
  .get(async(req, res) => {
    res.status(200);
    res.send({data: 'Welcome to my smart media server!'});
  });

router.use('/movies', movies);


module.exports = router;