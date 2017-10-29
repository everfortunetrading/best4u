var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', content);
});

router.get('/no-sidebar', function(req, res, next) {
  res.render('no-sidebar', { title: 'Express' });
});

content = {
  title: 'Best 4 U',
  subtitle: 'Travel Mugs and Bottles'
}



module.exports = router;
