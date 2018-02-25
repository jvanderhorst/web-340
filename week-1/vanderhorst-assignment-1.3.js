/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 23 February 2018
; Modified By: Johnny Vanderhorst
; Description: Modules
;===========================================
*/ 

// module referencing
var url = require('url');

var parsedURL = url.parse('https://www.deathstar.com/profile?name=tarkin');


// output results
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);