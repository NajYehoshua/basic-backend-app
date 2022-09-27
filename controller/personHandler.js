const Person = require("../model/person");
const { createCustomError } = require("../error/customError");
const asyncHandler = require("../middlewares/asyncHandler");

//! GET Handler
const getPersonsHandler = asyncHandler(async (req, res) => {
  //! Get all document
  const persons = await Person.find();

  //! Give a Response to client
  res.status(200).json({ results: persons });
});

//! POST Handler
const postPersonHandler = asyncHandler(async (req, res) => {
  //! Get user data
  const { name, birthYear, age } = req.body;

  //! Create new Person model
  const newPerson = await Person.create({ name, birthYear, age });

  //! Give a Response to client
  res.status(200).json(newPerson);
});

//! PATCH Handler
const patchPersonHandler = asyncHandler(async (req, res) => {
  //! Get document id
  const { id } = req.params;

  //! Get body data
  const { name, age } = req.body;

  //! Option objects
  const options = {
    new: true,
  };

  //! Find and update document
  const response = await Person.findByIdAndUpdate(id, { name, age }, options);

  //! Check response from db
  if (!response) {
    return next(createCustomError(`No person with ID of ${id} exist`, 404));
  }

  //! Give a Response to client
  res.status(200).send({ response });
});

//! DELETE Handler
const deletePersonHandler = asyncHandler(async (req, res, next) => {
  //! Get the document id
  const { id } = req.params;

  //! Delete documents from db
  const response = await Person.findByIdAndDelete(id);

  //! Check response from db
  if (!response) {
    return next(createCustomError(`No person with ID of ${id} exist`, 404));
  }

  //! Give a Response to client
  res.status(200).send({ status: "Success", result: response });
});

module.exports = {
  getPersonsHandler,
  postPersonHandler,
  patchPersonHandler,
  deletePersonHandler,
};
