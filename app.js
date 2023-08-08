const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//rutas
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Success");
});
