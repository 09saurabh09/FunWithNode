var express = require('express');
var router = express.Router();

var start = Date.now();

// expecting something close to 500
//setTimeout(function(){ start }, 500);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: start });
});

router.get('/watchlist', function(req, res) {
  res.render('watch');
});

router.get('/yahoo', function(req, res) {
  res.render('yahoo');
});

router.get('/wl', function(req, res) {
  res.render('watchlist_final');
});

router.post('/watchlistnew', function(req, res) {
  res.send(200);
  console.log(req.body);
});


module.exports = router;
