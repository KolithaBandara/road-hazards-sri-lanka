const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.8.8"]);

const connectDB = async () => {
  await mongoose.connect("<connection String>/dbname");
};

module.exports = connectDB;
