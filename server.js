const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "jonah",
    password: "1234",
    database: "hackathon2",
    port: 5432,
  },
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.set("view engine", "ejs");

app.listen(4061, () => {
  console.log("listening on port 4061");
});

app.use(express.static(__dirname + "/public"));

app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/public/game.html");
});

app.get("/about", (req, res) => {
  res.render("about");
});
