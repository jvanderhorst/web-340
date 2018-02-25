/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 25 February 2018
; Modified By: Johnny Vanderhorst
; Description: Node.js server example
;===========================================
*/ 

var http = require("http");

function processRequest(req, res) {
    var body = "Hello World, my name is Johnny and I am \nlearning about Node.js servers";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);