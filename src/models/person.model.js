const { get } = require("mongoose");
const Person = require("./person.mongo");

//To set the default serial number...
const defaultSerialNum = 1;

//To get the current serial number...
async function getSerialNum() {
  const existingSerialNum = Person.find({})
    .then((people) => {
      return people.length;
    })
    .catch((err) => {
      console.log(err);
    });
  return existingSerialNum;
}

//To get all saved persons from the database...
async function getPersonData() {
  return Person.find({}, { _id: 0, __v: 0 }).sort({ serialNum: 1 });
}

//To get a single person from the database...
async function getSinglePersonData(serialNum) {
  return isNaN(serialNum)
    ? Person.findOne({ name: serialNum }, { _id: 0, __v: 0 })
    : Person.findOne({ serialNum: serialNum }, { _id: 0, __v: 0 });
}

//To add a person to the database...
async function addPersonData(person) {
  const newSerialNum = (await getSerialNum()) + 1;
  const newPerson = Object.assign(person, {
    serialNum: newSerialNum,
  });
  await Person.create(newPerson);
  return newPerson;
}

//To update a person in the database...
async function updatePersonData(queryUser_id, updatedPerson) {
  await Person.findOneAndUpdate(
    {
      serialNum: queryUser_id,
    },
    updatedPerson,
    {
      upsert: true,
    }
  );
  return updatedPerson;
}

//To delete a person from the database...
async function deletePersonData(queryUser_id) {
  await Person.findOneAndDelete({
    serialNum: queryUser_id,
  });
  return true;
}

module.exports = {
  getPersonData,
  getSinglePersonData,
  addPersonData,
  updatePersonData,
  deletePersonData,
};
