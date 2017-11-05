var express = require('express');
var router = express.Router();
var db = require('../database');

var con = db()

router.get('/', function(req, res, next) {
  var products = {products: [
    
    {picture : "CAR BOTTLE/EF330A.JPG", title: "Pulvinar sagittis congue", 
    description: "Commodo id natoque malesuada sollicitudin elit suscipit magna."}, 
        
    {picture : "CAR BOTTLE/EF330A_Colors.jpg", title: "Fermentum sagittis proin", 
    description: "Commodo id natoque malesuada sollicitudin elit suscipit magna."}, 
        
    {picture : "SPORT WATER BOTTLE/EF150A_Colors.jpg", title: "Sed quis rhoncus placerat", 
    description: "Commodo id natoque malesuada sollicitudin elit suscipit magna."},
    
    {picture : "SPORT WATER BOTTLE/EF150A-BK/PK1A2122.JPG", title: "Ultrices urna sit lobortis", 
    description: "Commodo id natoque malesuada sollicitudin elit suscipit magna."}
    
    ]}
  res.render('admin', products);


});

router.post('/products', (req,res) => {
  var name, image_url, amazon_url, description
  name = req.body.name;
  image_url = req.body.image_url;
  amazon_url = req.body.amazon_url;
  description = req.body.description;


  con.connect(function(err){
    if (err) throw err;
    var sql = "INSERT INTO products (name, description, image_url, amazon_url) VALUE (\""
     + name + "\", \"" + description + "\", \"" + image_url + "\", \"" + amazon_url + "\" )"

    con.query(sql, function(err, result) {
      if(err) throw err
      console.log("1 record inserted")
    })
  })
  res.redirect("/admin");
})


module.exports = router;
