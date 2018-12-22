
// variables for required packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 30000;
var reservations = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve.html", function (req, res) {
	res.sendFile(path.join(__dirname, "TablesPage.html"));
});

app.get("/tables.html", function (req, res) {
	res.sendFile(path.join(__dirname, "make.html"));
});

