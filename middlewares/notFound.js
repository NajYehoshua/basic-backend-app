const notFound = (req, res) => {
  res.status(500).send("This routes does not exist1");
};

module.exports = notFound;
