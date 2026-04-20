const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  city: { type: String },
  job: { type: String },
});

module.exports = mongoose.model("User", userSchema);
