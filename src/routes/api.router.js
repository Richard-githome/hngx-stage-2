const getRouter = require("express").Router();
const { httpGetApiData } = require("../controllers/api.controller");


getRouter.get('/', httpGetApiData);

module.exports = {getRouter};