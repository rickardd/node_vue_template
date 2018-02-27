var express = require('express');
var router = express.Router();

// GET /
router.get('/', function( req, res ) {
  res.send('Home');
});

// GET /about
router.get('/about', function( req, res ) {
  res.send('About');
});

module.exports = router;
