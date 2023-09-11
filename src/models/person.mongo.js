const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  serialNum: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
});

// Connects personSchema with the "launches" collection
module.exports = mongoose.model("Person", personSchema);
