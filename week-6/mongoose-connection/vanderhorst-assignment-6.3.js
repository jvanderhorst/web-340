/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 28 March 2018
; Modified By: Johnny Vanderhorst
; Description: mongoose-connections
;===========================================
*/ 

// require staements
var mongoose = require("mongoose");
var http = require("http");
var logger = require("morgan");
var express = require("express");

// database connection
var mongoDB = "mongodb://jvanderhorst:vader@ds159662.mlab.com:59662/ems";
mongoose.connect (mongoDB, {
    useMongoClient: true
});


mongoose.Promise = global.Promise;
var db = mongoose.connection;// database variable to hold connection
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

// express server
var app = express();
app.use(logger("dev"));

// http server
http.createServer(app).listen(8080, function(){
    console.log("Application started and lestening on port 8080");
});