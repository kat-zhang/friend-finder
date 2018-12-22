var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "sort_db"
});
}

connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
  
}
});

function loadResults() {
    // Selects all of the data from the MySQL profiles table
    connection.query("SELECT * FROM houses", function(err, res) {
      if (err) throw err;
      //a fun trick for converting mysql's returned 'rowPacketData' obj into more usable JSON
      var data = JSON.stringify(res);
      data = JSON.parse(data);
      // loop over your data converting the string of numbers into an array (using split??)
      friends = data;
    });
  }
  