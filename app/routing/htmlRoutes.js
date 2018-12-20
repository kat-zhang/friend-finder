var path = require("path");

module.exports = function(app) {
    app.get("/", function (req, res) {
        console.log("jgjgjg");
        // res.send("Arnab ie the best")
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        // res.send("Kat is the best!")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}