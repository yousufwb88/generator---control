const express = require("express");
const app = express();

let generator = "OFF";

app.get("/on", (req, res) => {
  generator = "ON";
  res.send("GENERATOR ON");
});

app.get("/off", (req, res) => {
  generator = "OFF";
  res.send("GENERATOR OFF");
});

app.get("/status", (req, res) => {
  res.send(generator);
});

app.listen(3000, () => {
  console.log("Server running");
});
