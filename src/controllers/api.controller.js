const {getApiData} = require("../models/api.model");

function httpGetApiData(req, res){
    const { slack_name, track} = req.query;
    const retrivedData = getApiData(slack_name, track);
    res.json(retrivedData).status(200);
}

module.exports = {httpGetApiData};