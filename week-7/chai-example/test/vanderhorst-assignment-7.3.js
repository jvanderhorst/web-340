/*
============================================
; Title: Assignment 7.3
; Author: Professor Krasso
; Date: 6 April 2018
; Modified By: Johnny Vanderhorst
; Description: Mocha and Chai
;===========================================
*/ 

var fruits = require("../fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});