const express = require("express");
const cors = require("cors");
const app = express();
const {getRouter} = require("./routes/api.router");


app.use(express.json());
app.use(cors());

app.use('/api', getRouter);

module.exports = app;