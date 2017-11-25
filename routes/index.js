var express = require('express');
var router = express.Router();
var db = require('../database');

var con = db()

/* GET home page. */
router.get('/', function(req, res, next) {
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    content = {
      title: 'Best 4 U',
      subtitle: 'Travel Mugs and Bottles',
      products: result
    }
    res.render('index', content);
  });

});

router.get('/no-sidebar', function(req, res, next) {
  res.render('no-sidebar', { title: 'Express' });
});

module.exports = router;
