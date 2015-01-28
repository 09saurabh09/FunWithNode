var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chat*', function(req, res) {
  res.render('chat');
});

router.get('/ttt*', function(req, res) {
  res.render('tictactoe');
});

module.exports = router;
