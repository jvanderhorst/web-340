/*
============================================
; Title: Assignment 7.4
; Author: Professor Krasso
; Date: 8 April 2018
; Modified By: Johnny Vanderhorst
; Description: EMS
;===========================================
*/ 

// require statements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// define the employee nametSchema
var nameSchema = new Schema({
    name: String
});


// define the Employee model
var Employee = mongoose.model("Employee", nameSchema);


// expose the employees to calling files
module.exports = Employee;