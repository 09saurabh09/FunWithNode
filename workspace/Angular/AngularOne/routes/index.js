var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chapOne', function(req, res) {
  res.render('chapone', { title: 'Express' });
});

module.exports = router;
