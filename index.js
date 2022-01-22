const express = require("express");
const path = require("path");
const app = express();
const { createClient } = require("redis");
require('dotenv').config({ path: './.env' })

app.set("view engine", "ejs");
app.set("views", "./public/views")
app.use(express.static(path.join(__dirname, "public")));
const redis = createClient({
    url: process.env.REDIS
});

const redisConnect = async () => {
    await redis.connect();
}

app.get("/", async (req, res) => {
    let resp = await redis.get("myAvatar")
    console.log(resp);
    res.render("index", {avatar: resp});
});

app.listen(80, "0.0.0.0", () => {
    console.log("Running on port 80");
});
redisConnect();