
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var reservations = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/make", function(req, res) {
  let newTable = res.body;
  tables.push(newTable);

  res.json(newTable);

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
