// var express = require("express");

// var app = express();

var PORT = process.env.PORT || 3055;

// app.use(express.static("public"));

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());


// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");
var express = require('express');

var app = express();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "survey_db"
});
connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id"+connection.threadId);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
app.use(express.static("./app/public"));



// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.get("/", function(req,res) {
    connection.query("SELECT * FROM questions;", function(error, data) {
        if (error) {
            return res.status(500).end();
        }
        res.render("home");
    });
});

// app.get("/survey", function(req,res) {
//     connection.query("SELECT * FROM questions;", function(error, data) {
//         if (error) {
//             return res.status(500).end();
//         }
//         res.render("survey", { questions: data});
//     });
// });








app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});