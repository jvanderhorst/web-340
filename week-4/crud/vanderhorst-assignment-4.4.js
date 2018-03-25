/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 17 March 2018
; Modified By: Johnny Vanderhorst
; Description: crud
;===========================================
*/ 

//require statements
var express = require("express");
var http = require("http");

var app = express();

//app routes
app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});