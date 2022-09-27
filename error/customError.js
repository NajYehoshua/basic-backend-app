//! CustomError Class
class CustomError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

//! create createCustomError
const createCustomError = (msg, statusCode) => {
  return new CustomError(msg, statusCode);
};

//! exports
module.exports = {
  CustomError,
  createCustomError,
};
