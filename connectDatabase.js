const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log("Connected To Database"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
