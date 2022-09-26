const Person = require("../model/person");

//! GET Handler
const getPersonsHandler = async (req, res) => {
  //! Get all document
  const persons = await Person.find();

  //! Give a Response to client
  res.json({ results: persons });
};

//! POST Handler
const postPersonHandler = async (req, res) => {
  //! Get user data
  const { name, birthYear, age } = req.body;

  //! Create new Person model
  const newPerson = new Person({ name, birthYear, age });

  //! Save to Database
  const response = await newPerson.save();

  //! Give a Response to client
  res.json(response);
};

//! PATCH Handler
const patchPersonHandler = async (req, res) => {
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

  //! Give a Response to client
  res.send({ response });
};

//! DELETE Handler
const deletePersonHandler = async (req, res) => {
  //! Get the document id
  const { id } = req.params;

  //! Delete documents from db
  const response = await Person.findByIdAndDelete(id);

  //! Give a Response to client
  res.send({ status: "Success", result: response });
};

module.exports = {
  getPersonsHandler,
  postPersonHandler,
  patchPersonHandler,
  deletePersonHandler,
};
