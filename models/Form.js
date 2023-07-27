const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  name: String,
  email: String,
  question: String,
  response: String
});

module.exports = mongoose.model("Form", formSchema);
