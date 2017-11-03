var mysql = require('mysql')

function createDBConnection(){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chrishanyu94",
    database: "mydb"
  })

  return con;
}

var con = createDBConnection();

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE TABLE test (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = db;
