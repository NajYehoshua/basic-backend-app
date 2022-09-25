const mongoose = require("mongoose");

//! personSchema model
const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  birthYear: {
    type: Number,
  },
  age: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

//! compile schema to model
const Person = new mongoose.model("Person", personSchema);

module.exports = Person;
