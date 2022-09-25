const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const app = express();
const port = 4500;

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

//! starting server
app.listen(port, () => {
  console.log("Server is up and running!");

  mongoose
    .connect(
      `mongodb+srv://joshua:141996@cluster0.wtd2oo5.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Error occur during connection attempt!"));
});
