const { CustomError } = require("../error/customError");

//! customError handler middleware
const errorHandlerMiddleware = (err, req, res) => {
  //! check if err is instance of custom error
  if (err instanceof CustomError) {
    //! resturn a response
    return res.staus(err.statusCode).json({ msg: err.message });
  }

  //! default response
  return res.status(err.statusCode).json({ msg: "Something went wrong!" });
};

module.exports = errorHandlerMiddleware;
