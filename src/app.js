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

// GET users/all
app.get("/users/all", async (req, res) => {
  try {
    const userData = await User.find(req.body);
    if (userData.length === 0) {
      res.status(400).send("NO USER DATA! 😟");
    } else {
      res
        .status(200)
        .send(`${userData.length} USERS ARE THERE! 😇: ${userData}`);
    }
  } catch (err) {
    console.log(`ERROR : ${err.message}, ${err}`);
    res
      .status(400)
      .send("SOMETHING WENT WRONG!🥲 PLEASE CONTACT THE SUPPORT TEAM💔");
  }
});

// GET user/ by age
app.get("/user/age", async (req, res) => {
  try {
    const userData = await User.findOne(req.body);
    if (userData.age === req.body.age) {
      res.status(200).send(`USER FOUND! 😊, ${userData}`);
    } else {
      res.status(404).send("NO USER 🥲");
    }
  } catch (err) {
    console.log(`Error : ${err.message} ===> ${err}`);
  }
});

// GET users/ by firstName
app.get("/user/firstName", async (req, res) => {
  try {
    const userData = await User.find(req.body);
    if (userData.length === 0) {
      res.status(404).send("NO USERS! 💔");
    } else if (userData.length === 1) {
      res.status(200).send(`USER FOUND 😘 : ${userData}`);
    } else {
      res.status(200).send(`${userData.length} USERS, FOUND 😍 : ${userData}`);
    }
  } catch (err) {
    console.log(`ERROR: ${err.message} ===> ${err}`);
  }
});

// DELETE user/ by id
app.delete("/user/delete/id", async (req, res) => {
  try {
    const userData = await User.findByIdAndDelete(req.body);
    if (!userData) {
      res
        .status(400)
        .send("THERE IS NO USER LIKE THAT! 😳 PLEASE RE-CHECK THE USERID");
    } else {
      res.status(200).send("USER DELETED SUCCESSFULLY! 🗑️✅");
    }
  } catch (err) {
    console.log(`ERROR : ${err.message} ===> ${err}`);
    res.status(400).send("BAD REQUEST!😟 Connect the support team");
  }
});

// app.listen(9859, console.log("Server running on PORT:9859"));
