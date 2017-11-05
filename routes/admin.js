var express = require('express');
var router = express.Router();
var db = require('../database');

var con = db()

router.get('/', function(req, res, next) {
    con.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      res.render('admin', {products: result});
    });
});

router.post('/products', (req,res) => {
  var name, image_url, amazon_url, description
  name = req.body.name;
  image_url = req.body.image_url;
  amazon_url = req.body.amazon_url;
  description = const module = require('module');.body.description;

  var sql = "INSERT INTO products (name, description, image_url, amazon_url) VALUE (\""
   + name + "\", \"" + description + "\", \"" + image_url + "\", \"" + amazon_url + "\" )"

  con.query(sql, function(err, result) {
    if(err) throw err
    console.log("1 record inserted")
  })
  res.redirect("/admin");
})

router.post("/delete", (req,res) => {
  var sql = "DELETE FROM shirts WHERE id=" + req.body.id

  con.query(sql, (err)=>{
    if(err) throw err
    console.log("1 record deleted")
  })
})


module.exports = router;
