const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
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
    profilePic: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
