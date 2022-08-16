const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/view"));

app.get("/", (req, res) => {
  return res.render("home.ejs");
});

app.get("/search", (req, res) => {
  return res.render("search.ejs");
});

app.post("/handle-search", (req, res) => {
  console.log("----------------------------");
  console.log(req.body);
  return res.send("Welcome to handle search!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
