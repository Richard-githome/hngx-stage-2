const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
});

// Connects personSchema with the "launches" collection
module.exports = mongoose.model('Person', personSchema);
