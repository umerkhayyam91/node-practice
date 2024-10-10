const express = require("express");
const app = express();
require("dotenv").config()
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("umerkhayyam91");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
