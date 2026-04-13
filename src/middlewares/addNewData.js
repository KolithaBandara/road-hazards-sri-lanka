const addNew = (req, res) => {
  try {
    throw new Error("Ask for support team help...");
  } catch (err) {
    res.status(501).send("You can't play with this...");
  }
};

const addNewData = (req, res, next) => {
  console.log("POST data/new/hazard, Route Handler");
  res.send("New data added...!");
};

module.exports = { addNew, addNewData };
