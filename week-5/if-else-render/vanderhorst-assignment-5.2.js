/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 25 March 2018
; Modified By: Johnny Vanderhorst
; Description: EJS Templates
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var path = require("path");

// app functions
app = express();
app.set("views", path.resolve(__dirname, "views"));//tell express the views are in the 'views' directory
app.set("view engine", "ejs");//tell express to use the ejs view engine


// local array
var villians = [
  "Darth Vader",
  "Magneto",
  "Venom",
  "Thanos"
];

// routes
app.get("/", function(request, response) {
    response.render("index", {
        names: villians
    })
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});