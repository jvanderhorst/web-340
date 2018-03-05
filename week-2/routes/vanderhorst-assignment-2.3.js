/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 3 March 2018
; Modified By: Johnny Vanderhorst
; Description: Routing
;===========================================
*/ 

var express = require('express');
var http = require('http');

var app = express();

// routes
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');
});

app.use(function(request, response){
    response.statusCode = 404;
    response.end("404!\n");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});