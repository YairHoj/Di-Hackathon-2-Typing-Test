const express = require("express");
const ejs = require("ejs");

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

app.get("/", (req, res) => {
  db.select("text_length", "paragraph")
    .from("passages")
    .then((passages) => res.send(passages));
});

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
