const express = require("express");
const {
  getPersonsHandler,
  postPersonHandler,
  patchPersonHandler,
  deletePersonHandler,
} = require("../controller/personHandler");
const Person = require("../model/person");
const router = express.Router();

// ! GET request
router.get("/", getPersonsHandler);

// ! POST request
router.post("/create", postPersonHandler);

// ! PATCH request
router.patch("/update/:id", patchPersonHandler);

// ! DELETE request
router.delete("/delete/:id", deletePersonHandler);

module.exports = router;
