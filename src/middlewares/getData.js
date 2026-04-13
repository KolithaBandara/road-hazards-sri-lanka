const getUserData = (req, res, next) => {
  try {
    throw new Error("Can't access data");
  } catch (err) {
    res.status(401).send("You can't get data... Contact the support team...!");
  }
};

module.exports = { getUserData };
