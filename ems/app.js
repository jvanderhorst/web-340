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

var app = express();

// app functions
app.set("views", path.resolve(__dirname, "views"));//tell express the views are in the 'views' directory
app.set("view engine", "ejs");//tell express to use the ejs view engine
app.use(logger("short"));

// app route
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});