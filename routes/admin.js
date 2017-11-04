var express = require('express');
var router = express.Router();
var db = require('../database');

var con = db()

router.get('/', function(req, res, next) {
  res.render('admin');
});

router.post('/products', (req,res) => {
  console.log(req.body);

  res.redirect("/admin");
})


module.exports = router;
