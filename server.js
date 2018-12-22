var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;
var tables = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "TablesPage.html"));
});

app.post("/make", function(req, res) {
  let newTable = res.body;
  tables.push(newTable);

  res.json(newTable);
});
