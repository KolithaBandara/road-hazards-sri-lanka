const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    minLength: [2, `Must be at least 2, PLEASE TRY AGAIN! 🥲`],
    lowercase: true,
    trim: true,
    required: true,
  },
  lastName: { type: String, lowercase: true, trim: true },
  age: {
    type: Number,
    min: [
      17,
      `You must have to be least 17 years old! COME BACK WHEN YOU'RE GROWN!💔`,
    ],
  },
  city: { type: String, lowercase: true, trim: true },
  job: { type: String },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
