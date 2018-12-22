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

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  // res.json(reservations);
});
app.get("/api/tables", (req,res)=>{
  res.json(reservations.slice(0,5));
});
app.get("/api/waitlist", (req,res)=>{
  if(reservations.length>5){
    res.json(reservations.slice(5));
  }
});

app.post("/reserve", function(req, res) {
  // console.log(res);

  console.log(req.body);
  let newTable = req.body;
  reservations.push(newTable);
  console.log(newTable);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});