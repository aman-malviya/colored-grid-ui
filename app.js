const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

//App
const app = express();

let colors = ["#000", "#062121", "#08ffc8"];
let randomArr = [];
let gridSize = "3";

//View Engine
app.set("view engine", "ejs");

//Static Directory
app.use(express.static(__dirname + "/public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
//Get requests
app.get("/", function (req, res) {
  res.render("home", {
    grid: gridSize,
    colors: colors,
  });
});
app.post("/", function (req, res) {
  colors.length = 0;
  gridSize = req.body.gridSize;
  colors.push(req.body.color1);
  colors.push(req.body.color2);
  colors.push(req.body.color3);
  res.redirect("/");
});

//Listening to Port
app.listen("3000", function () {
  console.log("Server has started");
});
