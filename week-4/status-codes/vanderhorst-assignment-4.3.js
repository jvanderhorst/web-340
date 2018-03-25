/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 17 March 2018
; Modified By: Johnny Vanderhorst
; Description: Status codes
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");

var app = express();

// app routes
app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "Sorry, webpage not found"
    })
});

app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Looks like everything is OK, page loaded correctly"
    })
});

app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Unable to implement page"
    })
});

// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});