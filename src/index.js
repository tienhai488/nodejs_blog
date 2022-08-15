const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/view"));

app.get("/", (req, res) => {
  return res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
