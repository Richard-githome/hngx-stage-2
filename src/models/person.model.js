// const { get } = require("mongoose");
const Person = require("./person.mongo");

//To set the default serial number...
// const defaultSerialNum = 1;

//To get the current serial number...
async function getExistingNumberOfPersons() {
  try {
    const existingNumberOfPersons = Person.find({})
    .then((people) => {
      return people.length;
    })
    return existingNumberOfPersons;
  } catch (error) {
    console.error(error)
    return {error : 'error getting serial number'}
  }
}

//To get all saved persons from the database...
async function getPersonData() {
  try {
    return Person.find({}, { _id: 0, __v: 0 }).sort({ serialNum: 1 });
  } catch (error) {
    console.error(error);
    return {error : 'error getting all person data'}
  }
}

//To get a single person from the database...
async function getSinglePersonData(personParam) {
  try {
    return isNaN(personParam)
    ? Person.findOne({ name: personParam }, { _id: 0, __v: 0 })
    : Person.findOne({ id: personParam }, { _id: 0, __v: 0 });
  } catch (error) {
    console.error(error);
    return {error : 'error getting person data'};
  }
}

//To add a person to the database...
async function addPersonData(person) {
  try {
    const newUser_id = ((await getExistingNumberOfPersons()) + 1);
    const newPerson = Object.assign(person, {
      id: newUser_id,
    });
    await Person.create(newPerson);
    return newPerson;  
  } catch (error) {
    console.error(error);
    return {error : 'error in adding person data'};
  }
}

//To update a person in the database...
async function updatePersonData(queryUser_id, updatePerson) {
  try {
    const existingPerson = await getSinglePersonData(queryUser_id);
    if(!existingPerson){ return {ok: false}}
    await Person.findOneAndUpdate(
      {
        id: existingPerson.id,
      },
      updatePerson,
      {
        upsert: true,
      }
    );
    return {ok: true};  
  } catch (error) {
    console.error(error);
    return {error : 'error occured in updating person data'};
  }
}

//To delete a person from the database...
async function deletePersonData(queryUser_id) {
  try {
    const existingPerson = await getSinglePersonData(queryUser_id);
    if(!existingPerson){ return { ok: false}}
    await Person.findOneAndDelete({
      id: existingPerson.id,
    });
    return {ok: true};  
  } catch (error) {
    console.error(error);
    return {error : 'error occured in deleting person data'};
  }
}

module.exports = {
  getPersonData,
  getSinglePersonData,
  addPersonData,
  updatePersonData,
  deletePersonData,
};
