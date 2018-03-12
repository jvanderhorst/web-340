var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // tell express the views are in the views directory
app.set("view engine", "ejs"); //tell express to use the EJS view engine
app.use(logger("short"));
app.get("/", function(req, res){
    res.render("index", {
        message: "Hello, this week we are working with the Morgan Logger"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});