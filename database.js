var mysql = require('mysql')

function createDBConnection(){
  var con = mysql.createConnection({
    host: "localhost",
    user: "best4u",
    password: "password",
    database: "mydb"
  })

  return con;
}

var con = createDBConnection();


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE TABLE IF NOT EXISTS products (id INT(11) NOT NULL AUTO_INCREMENT, name VARCHAR(255), description TEXT, image_url TEXT, amazon_url TEXT, primary key (id))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = createDBConnection;
