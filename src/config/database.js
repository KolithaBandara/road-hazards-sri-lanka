// dotenv to bring data from .env file
require("dotenv").config();
const databaseConnectionString = process.env.MONGODB_URI;

const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.8.8"]);

const connectDB = async () => {
  await mongoose.connect(`${databaseConnectionString}`);
};

module.exports = connectDB;
