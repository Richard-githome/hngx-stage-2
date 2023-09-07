const {getApiData} = require("../models/api.model");

function httpGetApiData(req, res){
    const { slack_name, track} = req.query;
    const retrivedData = getApiData(slack_name, track);
    return res.status(200).json({retrivedData});
}

module.exports = {httpGetApiData};