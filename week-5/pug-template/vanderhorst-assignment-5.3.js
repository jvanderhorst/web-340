/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 25 March 2018
; Modified By: Johnny Vanderhorst
; Description: Pug Templates
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");


var app = express();

// app functions
app.set("views", path.resolve(__dirname, "views"));//tell express the views are in the 'views' directory
app.set("view engine", "pug");//tell express to use the pug view engine

// routes
app.get("/", function(request, response) {
    response.render("index", {
        message: "Using Pug for the first time!"
    });
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});