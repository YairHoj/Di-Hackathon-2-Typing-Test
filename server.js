const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.listen(4020, () => {
  console.log("listening on port 4020");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/about", (req, res) => {
  res.render("about");
});
