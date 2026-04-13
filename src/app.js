const express = require("express");
const app = express();

// Main Middleware
app.use("/", (req, res, next) => {
  console.log(
    "=== MIDDLEWARES & ROUTE HANDLERS ARE WORKING THROUGH THIS REQUEST ===",
  );
  next();
});

// ALL methods, /data Middleware
app.use("/data", (req, res, next) => {
  console.log("=== DATA Middleware ===");
  next();
});

// ALL methods, /data/new Middleware
app.use("/data/new", (req, res, next) => {
  console.log("=== DATA/NEW Middleware ===");
  next();
});

// POST /data/new Route Handler
app.post("/data/new", (req, res, next) => {
  console.log("POST method, /data/new Middleware");
  res.send("Add a new data");
});

// ALL methods /data/new/hazard Middleware
app.use("/data/new/hazard", (req, res, next) => {
  console.log("=== DATA/NEW/HAZARDS Middleware ===");
  next();
});

// POST /data/new/hazards Route Handler
app.post("/data/new/hazard", (req, res, next) => {
  console.log("POST data/new/hazard, Route Handler");
  res.send("New data added...!");
});

app.listen(9859, console.log("Server running on PORT:9859"));
