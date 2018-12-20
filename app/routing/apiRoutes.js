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
        database: "survey_db"
    });
}

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
    }
});