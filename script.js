const express = require("express");
const notFound = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const connectDB = require("./db/connectToDB");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const app = express();
require("dotenv").config();

//! Application level middleware
app.use(bodyParser.urlencoded({ extended: true }));

//! Application level middleware
app.use((req, res, next) => {
  //! Manipulate request body
  req.body.processed = true;

  //! Go to middleware
  next();
});

//! express routes
app.use("/routes", router);

//! Route that not exist middleware
app.use(notFound);

//! Custom error handler
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    //! Call connectDB fn
    await connectDB(process.env.MONGO_URL);

    //! start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and running in PORT: ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
