var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var path = require("path")
var app = express()
//I need the body-parser and routes module

app.use("/client", express.static(path.join(__dirname, "exam/client")));
app.use("/templates", express.static(path.join(__dirname, "exam/client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//I can't seem to direct to my routes but I am running, can you link me to my routes? Please input the routes in this file.

var routes = require("./exam/routes/routes")

mongoose.connect("mongodb://localhost/myApp")

app.listen(8080, function(){

    console.log("server is running!")
}) //What Port should I listen on? Please put the port in between the parantheses