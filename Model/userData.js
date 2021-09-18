const mongoose = require("mongoose");

const userData = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter an email-id"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [8, "Password should have atleast 8 characters"],
  },
});

module.exports = mongoose.model("User", userData);
