const express = require("express");
const app = express();

const { addNew, addNewData } = require("./middlewares/addNewData");
const { getUserData } = require("./middlewares/getData");

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

app.listen(9859, console.log("Server running on PORT:9859"));
