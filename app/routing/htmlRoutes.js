var html = require("./servers");
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}))
html.get("/",(req,res){
    res.render("home")
});