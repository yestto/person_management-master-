const { number } = require("joi");
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  age: { type: Number, required: true, min: 1, max: 120 },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  mobile: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Person", personSchema);