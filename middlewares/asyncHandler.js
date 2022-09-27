//! asyncHandler middleware
const asyncHandler = (fn) => {
  //! return a function
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

//! export asynchandler function
module.exports = asyncHandler;
