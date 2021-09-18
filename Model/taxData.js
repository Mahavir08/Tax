const mongoose = require("mongoose");

const taxSchema = mongoose.Schema({
  Basic: {
    type: String,
    default: 0,
  },
  LTA: {
    type: String,
    default: 0,
  },
  HRA: {
    type: String,
    default: 0,
  },
  Food: {
    type: String,
    default: 0,
  },
  Inv: {
    type: String,
    default: 0,
  },
  Rent: {
    type: String,
    default: 0,
  },
  Policy: {
    type: String,
    default: 0,
  },
  City: {
    type: String,
    default: 0,
  },
  AppHRA: {
    type: String,
    default: 0,
  },
});

module.exports = mongoose.model("Tax", taxSchema);
