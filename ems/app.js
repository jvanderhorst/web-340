/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 25 March 2018
; Modified By: Johnny Vanderhorst
; Description: EMS
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//csrf protection
var csrfProtection = csrf({cookie: true});

// initialize express
var app = express();

// mLab connection
var mongoDB = "mongodb://jvanderhorst:vader@ds159662.mlab.com:59662/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// app functions
app.set("views", path.resolve(__dirname, "views"));//tell express the views are in the 'views' directory
app.set("view engine", "ejs");//tell express to use the ejs view engine
app.set("port", process.env.PORT || 8080);

// app route
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});
app.get("/new", function(request, response) {
    response.render("new", {
        title: "New Employee"
    });
});
app.post("/process", function(request, response) {
    // console.log(request.body.txtName);
    if (!request.body.txtName) {
        response.status(400).send("Entries must have a name");
        return;
    }
 
    // get the request's form data
    var employeeName = request.body.txtName;
    console.log(employeeName);
 
    // create a employee model
    var employee = new Employee({
        name: employeeName
    });
 
    // save
    employee.save(function (error) {
        if (error) throw error;
 
        console.log(employeeName + " saved successfully!");
    });
 
    response.redirect("/list");
 });
 app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;

       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

/* http calls
app.get("/", function(request, response){
    response.render("index", {
        message: "XSS Prevention Example"
    });
});*/

app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }
    });
});

// create server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Application started on port " + app.get("port"));
});