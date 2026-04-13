const express = require("express");
const app = express();

const { addNew, addNewData } = require("./middlewares/addNewData");

// Main Middleware
app.use("/", (req, res, next) => {
  console.log(
    "=== MIDDLEWARES & ROUTE HANDLERS ARE WORKING THROUGH THIS REQUEST ===",
  );
  next();
});

// ALL methods, /data Middleware
app.use("/data", addNew, (req, res, next) => {
  console.log("=== DATA Middleware ===");
  next();
});

// POST /data/new/hazard Route Handler
app.post("/data/new/hazard", addNewData);

app.listen(9859, console.log("Server running on PORT:9859"));
