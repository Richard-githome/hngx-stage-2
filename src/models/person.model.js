// const { get } = require("mongoose");
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
      console.error(err);
      return {error : 'Error getting serial number'}
    });
  return existingSerialNum;
}

//To get all saved persons from the database...
async function getPersonData() {
  try {
    return Person.find({}, { _id: 0, __v: 0 }).sort({ serialNum: 1 });
  } catch (error) {
    console.error(error);
    return {error : 'Error getting person data'}
  }
}

//To get a single person from the database...
async function getSinglePersonData(personParam) {
  try {
    return isNaN(personParam)
    ? Person.findOne({ name: personParam }, { _id: 0, __v: 0 })
    : Person.findOne({ serialNum: personParam }, { _id: 0, __v: 0 });
  } catch (error) {
    console.error(error);
    return {error : 'Error getting person data'};
  }
}

//To add a person to the database...
async function addPersonData(person) {
  try {
    const newSerialNum = (await getSerialNum()) + 1;
    if(isNaN(newSerialNum)) return {error : 'Error getting serial number'};
    const newPerson = Object.assign(person, {
      serialNum: newSerialNum,
    });
    await Person.create(newPerson);
    return newPerson;  
  } catch (error) {
    console.error(error);
    return {error : 'Error in adding person data'};
  }
}

//To update a person in the database...
async function updatePersonData(queryUser_id, updatedPerson) {
  try {
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
  } catch (error) {
    console.error(error);
    return {error : 'Error occured in updating person data'};
  }
}

//To delete a person from the database...
async function deletePersonData(queryUser_id) {
  try {
    await Person.findOneAndDelete({
      serialNum: queryUser_id,
    });
    return true;  
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
