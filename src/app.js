const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { personRouter } = require("./routes/person.router");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  try {
    if (
      req.method === "GET" ||
      req.method === "POST" ||
      req.method === "PATCH" ||
      req.method === "DELETE"
    ) {
      next();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(405).json({ message: error.message });
  }
});

app.use("/api", personRouter);

module.exports = app;