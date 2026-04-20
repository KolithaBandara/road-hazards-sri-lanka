const express = require("express");
const connectDB = require("./config/database");
const app = express();

const { addNew, addNewData } = require("./middlewares/addNewData");
const { getUserData } = require("./middlewares/getData");

connectDB()
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY! ✅");
    app.listen(9859, console.log("Server running on PORT:9859"));
  })
  .catch((err) => {
    console.log(`CAN'T CONNECT TO THE DB ❌`);
    console.log(`Error :- ${err}`);
  });

// JSON Object to JavaScript Object convertor
app.use(express.json());

// Main Middleware
app.use("/", (req, res, next) => {
  console.log(
    "=== MIDDLEWARES & ROUTE HANDLERS ARE WORKING THROUGH THIS REQUEST ===",
  );
  next();
});

// GET /data Route Handler
app.get("/data", getUserData);

// POST /data/new/hazard Route Handler
app.post("/data/new/hazard", addNewData);

// ALL methods, /data Route Handler
app.use("/data", addNew);

// User MODEL
const User = require("./models/users");

// POST user/signup
app.post("/signup", async (req, res) => {
  try {
    // Create a new User MODEL instance
    const user = new User(req.body);
    await user.save();
    res.send("USER ADDED SUCCESSFULLY! 😃");
  } catch (err) {
    res.status(400).send("Can't access to the DATABASE ☹️");
    console.log(`Got an ERROR : ${err.message} ==> ${err}`);
  }
});

// app.listen(9859, console.log("Server running on PORT:9859"));
