/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 25 March 2018
; Modified By: Johnny Vanderhorst
; Description: EMS
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var helmet = require("helmet");

// initialize express
var app = express();

// mLab connection
var mongoDB = "mongodb://jvanderhorst:vader@ds159662.mlab.com:59662/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// app functions
app.set("views", path.resolve(__dirname, "views"));//tell express the views are in the 'views' directory
app.set("view engine", "ejs");//tell express to use the ejs view engine

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());

// app route
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

// http calls
app.get("/", function(request, response){
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});