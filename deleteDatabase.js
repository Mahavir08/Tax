const mongoose = require("mongoose");
const userData = require("./Model/userData");

const deleteDatabase = async () => {
  await userData.deleteMany();
  console.log("Empty Database");
};

module.exports = deleteDatabase;
