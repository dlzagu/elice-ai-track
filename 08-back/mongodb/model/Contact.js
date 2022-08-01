const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});
const PersonSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

const contactModel = mongoose.model("Contact", ContactSchema);
const personModel = mongoose.model("Person", PersonSchema);
module.exports = contactModel;
