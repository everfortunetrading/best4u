var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', content);
});

router.get('/no-sidebar', function(req, res, next) {
  res.render('no-sidebar', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
})

router.post('/finished', (req, res) => {
  /*product = req.body;
  product.Name != "" & product.Description != "" ? res.send(product.Name + " added!") : res.send("Nothing was added! Please fill in entirely.");
  var tmp_path = req.files.image.path
  res.send(tmp_path) */
})

content = {
  title: 'Best 4 U',
  subtitle: 'Travel Mugs and Bottles'
}

module.exports = router;
