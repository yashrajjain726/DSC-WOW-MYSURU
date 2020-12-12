const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enables CORS
app.use(cors({ origin: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000);
