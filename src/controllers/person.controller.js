const {
  getPersonData,
  addPersonData,
  getSinglePersonData,
  updatePersonData,
  deletePersonData,
} = require("../models/person.model");

//To get all saved persons from the database...
async function httpGetPersonData(req, res) {
  const persons = await getPersonData();
  if (!persons) {
    return res.status(404).json({ message: "No persons found." });
  }
  return res.status(200).json(persons);
}

//To get a single person from the database...
async function httpGetSinglePersonData(req, res) {
  const paramUser_id = req.params.user_id;
  const person = await getSinglePersonData(paramUser_id);
  if (!person) {
    return res.status(404).json({ message: `${paramUser_id} not found.` });
  }
  return res.status(200).json(person);
}

//To add a person to the database...
async function httpAddPersonData(req, res) {
  const person = req.body;
  if (!person.name) {
    return res.status(400).json({ message: "Missing required name field" });
  }
  await addPersonData(person);
  return res.status(201).json(person);
}

//To update a person in the database...
async function httpUpdatePersonData(req, res) {
  const queryUser_id = req.params.user_id;
  const updatedPerson = req.body;
  if (!queryUser_id || !updatedPerson) {
    return res
      .status(400)
      .json({ message: "Missing required query parameter or body" });
  }
  const person = await updatePersonData(queryUser_id, updatedPerson);
  return res.status(200).json(person);
}

//To delete a person from the database...
async function httpDeletePersonData(req, res) {
  const queryUser_id = req.params.user_id;
  if (!queryUser_id) {
    return res
      .status(400)
      .json({ message: "Missing required query parameter" });
  }

  const existingPerson = await getSinglePersonData(queryUser_id);
  if (!existingPerson) {
    return res
      .status(404)
      .json({ message: `Person with user_id ${queryUser_id} not found.` });
  }
  const confirmDeleted = await deletePersonData(existingPerson.serialNum);
  // console.log(confirmDeleted);
  if (!confirmDeleted) {
    return res
      .status(400)
      .json({
        message: `Person with user_id ${queryUser_id} was not be deleted.`,
      });
  }
  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetPersonData,
  httpGetSinglePersonData,
  httpAddPersonData,
  httpUpdatePersonData,
  httpDeletePersonData,
};
