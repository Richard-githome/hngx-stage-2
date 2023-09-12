const e = require("express");
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
    return res.status(404).json({ Message: "No persons found" });
  } else if (persons === "error") {
    return res.status(500).json({ Error: "Internal server error" });
  } else {
    return res.status(200).json(persons);
  }
}

//To get a single person from the database...
async function httpGetSinglePersonData(req, res) {
  const paramUser_id = req.params.user_id;
  const person = await getSinglePersonData(paramUser_id);
  if(!person){
    return res.status(404).json({ Message: "No person found" });
  } else if(person.error) {
    return res.status(500).json({ Error: "Internal server error" });
  }
  return res.status(200).json(person);
}

//To add a person to the database...
async function httpAddPersonData(req, res) {
  const person = req.body;
  if (!person.name) {
    return res.status(400).json({ Error: "Missing required name field" });
  }
  const addedPerson = await addPersonData(person);
  if(!addedPerson){
    return res.status(404).json({ Message: "No person found" });
  } else if(addedPerson.error){
    return res.status(500).json({ Error: "Internal server error" });
  }
  return res.status(201).json(addedPerson);
}

//To update a person in the database...
async function httpUpdatePersonData(req, res) {
  const queryUser_id = req.params.user_id;
  const updatedPerson = req.body;
  if (!queryUser_id || !updatedPerson) {
    return res
      .status(400)
      .json({ Error: "Missing required query parameter or body" });
  }
  const person = await updatePersonData(queryUser_id, updatedPerson);
  if(!person){
    return res.status(404).json({ Message: "No person found" });
  } else if(person.error){
    return res.status(500).json({ Error: "Internal server error" });
  }
  return res.status(200).json(person);
}

//To delete a person from the database...
async function httpDeletePersonData(req, res) {
  const queryUser_id = req.params.user_id;
  if (!queryUser_id) {
    return res
      .status(400)
      .json({ Error: "Missing required query parameter" });
  }

  const existingPerson = await getSinglePersonData(queryUser_id);
  if(!existingPerson){
    return res.status(404).json({ Message: "No person found" });
  } else if(existingPerson.error){
    return res.status(500).json({ Error: "Internal server error" });
  }
  const confirmDeleted = await deletePersonData(existingPerson.serialNum);
  if(!confirmDeleted){
    return res.status(404).json({ Message: "No person found" });
  } else if(confirmDeleted.error){
    return res.status(500).json({ Error: "Internal server error" });
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
