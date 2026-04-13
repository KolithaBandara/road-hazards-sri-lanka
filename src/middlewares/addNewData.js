const addNewData = (req, res, next) => {
  console.log("POST data/new/hazard, Route Handler");
  res.send("New data added...!");
};

module.exports = { addNewData };
