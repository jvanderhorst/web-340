/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 17 March 2018
; Modified By: Johnny Vanderhorst
; Description: JSON API
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");

var app = express();

// app route
app.get("/customer/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Bruce",
        lastName: "Banner",
        employeeId: id
    });
});

//create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});

