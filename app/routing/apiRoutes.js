var mysql = require("mysql");
var data= require("./servers");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "survey_db"
    });
}

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
    }
});