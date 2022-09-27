const mongoose = require("mongoose");

//! Connect to db function
const connectDB = (url) => {
  //! Return a connection function for DB
  return mongoose.connect(url);
};

module.exports = connectDB;
