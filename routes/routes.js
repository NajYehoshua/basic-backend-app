const express = require("express");
const Person = require("../model/person");
const router = express.Router();

// ! GET request
router.get("/", async (req, res) => {
  //! Get all document
  const persons = await Person.find();

  //! Respond to client with result
  res.json({ results: persons });
});

// ! POST request
router.post("/create", async (req, res) => {
  //! Get user data
  const { name, birthYear, age } = req.body;

  //! Create new Person model
  const newPerson = new Person({ name, birthYear, age });

  //! Save to Database
  const response = await newPerson.save();

  //! Respond to client with result
  res.json(response);
});

// ! PUT request
router.put("/update", (req, res) => {
  res.send({ msg: "Update current item!" });
});

// ! DELETE request
router.delete("/delete", (req, res) => {
  res.send({ msg: "Delete current item!" });
});

module.exports = router;
