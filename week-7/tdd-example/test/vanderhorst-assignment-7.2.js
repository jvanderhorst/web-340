/*
============================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 6 April 2018
; Modified By: Johnny Vanderhorst
; Description: TDD Test Case Example
;===========================================
*/ 

var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple, Orange, Mango', split(',')));
    });
});