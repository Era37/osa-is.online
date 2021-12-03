const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./public/views")
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(6000, "0.0.0.0", () => {
    console.log("Running on port 80");
});