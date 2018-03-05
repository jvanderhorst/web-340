/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 4 March 2018
; Modified By: Johnny Vanderhorst
; Description: Using the EJS view engine
;===========================================
*/ 

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //tell express the views are in the 'views' directory

app.set("view engine", "ejs"); //tell express to use the ejs view engine

app.get("/", function(req, res){
    res.render("index.ejs", {
        firstName: "Johnny",
        lastName: "Vanderhorst",
        address: "101 Cantina Dr, Wilmington, NC"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

