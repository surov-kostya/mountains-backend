var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.get('/index', function(req, res, next) {
  res.render('pages/index');
});

router.get('/my-works', function(req, res, next) {
  res.render('pages/my-works');
});

router.get('/blog', function(req, res, next) {
  res.render('pages/blog');
});

router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

module.exports = router;