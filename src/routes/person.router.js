const personRouter = require("express").Router();
const {
  httpGetPersonData,
  httpAddPersonData,
  httpGetSinglePersonData,
  httpUpdatePersonData,
  httpDeletePersonData,
} = require("../controllers/person.controller");

//Route for all persons...
personRouter.get("/", httpGetPersonData);

//Route for individual person...
personRouter.get("/:user_id", httpGetSinglePersonData);

//Route for adding a person...
personRouter.post("/", httpAddPersonData);

//Route for updating a person...
personRouter.patch("/:user_id", httpUpdatePersonData);

//Route for deleting a person...
personRouter.delete("/:user_id", httpDeletePersonData);

module.exports = { personRouter };
