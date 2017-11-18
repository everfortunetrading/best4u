var express = require('express');
var router = express.Router();
var db = require('../database');
var user = require('../admin_credential')

var con = db()
var app = express()

var loggedIn = false;

router.get('/', function(req, res, next) {
  if(loggedIn){
    con.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      res.render('admin', {products: result});
    });
  } else {
    console.log('i was here')
    res.redirect('/admin/login')
  }

});

router.post('/create', (req,res) => {
  var name, image_url, amazon_url, description
  name = req.body.name;
  image_url = req.body.image_url;
  amazon_url = req.body.amazon_url;
  description = req.body.description;

  var sql = "INSERT INTO products (name, description, image_url, amazon_url) VALUE (\""
   + name + "\", \"" + description + "\", \"" + image_url + "\", \"" + amazon_url + "\" )"

  con.query(sql, function(err, result) {
    if(err) throw err
    console.log("1 record inserted")
  })
  res.redirect("/admin");
})

router.post('/edit', (req,res) => {
  var fields = {
    name: req.body.name,
    image_url: req.body.image_url,
    amazon_url:req.body.amazon_url,
    description: req.body.description
  }

  for(var param in fields){
    var sql = "UPDATE products SET " + param + " = \"" + fields[param] + "\" WHERE id = " + req.query.id;

    con.query(sql, function(err, result) {
      if(err) throw err
      console.log("1 record edited")
    })
  }

  res.redirect('/admin')
})

router.post("/delete", (req,res) => {
  var sql = "DELETE FROM products WHERE id=" + req.query.id
  con.query(sql, (err)=>{
    if(err) throw err
    console.log("1 record deleted")
  })

  res.redirect("/admin")
})

router.get('/login', function(req, res){
  res.render('login', {alert: false});
})

router.post('/login', function(req, res){
  var usernameInput, passInput;
  usernameInput = req.body.user
  passInput = req.body.pass

  if(authenticate(usernameInput, passInput)){
    loggedIn = true;
    res.redirect('/admin')
  }else{
    res.render('login', {alert: true})
  }

})

function authenticate(u, p){
  if(user.username === u && user.password === p){
    return true
  } else {
    return false
  }
}
module.exports = router;
