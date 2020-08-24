const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

//App
const app = express();

//Global variable declaration
let colors = [];
let gridSize = "3";

//View Engine
app.set("view engine", "ejs");

//Static Directory
app.use(express.static(__dirname + "/public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

//Get request
app.get("/", function (req, res) {
  colors.length=0;
  gridSize="3";
  res.render("home", {
    grid: gridSize,
    colors: colors,
  });
});

//Post Request
app.post("/", function (req, res) {
  colors.length = 0;
  gridSize = req.body.gridSize;
  colors.push(req.body.color1);
  colors.push(req.body.color2);
  colors.push(req.body.color3);
  res.render("home", {
    grid: gridSize,
    colors: colors,
  });
});

//Listening to Port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server has started");
});
