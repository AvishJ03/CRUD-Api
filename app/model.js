var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  _id: String,
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
});

var user = new mongoose.model("User", userSchema);

module.exports = user;
