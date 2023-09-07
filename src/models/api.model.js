const dotenv = require('dotenv').config();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const currentDay = days[today.getDay()];
const utcTime = today.toISOString().slice(0, 19) + "Z";

const apiData = {
    slack_name: "",
    current_day: currentDay,
    utc_time: utcTime,
    track: "backend",
    github_file_url: "https://github.com/Richard-githome/hngx-stage1/blob/main/src/server.js",
    github_repo_url: "https://github.com/Richard-githome/hngx-stage1",
    status_code: 200,
};

const getApiData = (slack_name, track)=>{
    if (slack_name && track){
        apiData.slack_name = slack_name;
        apiData.track = track;
    } else if(!slack_name && !track) {
        throw new Error("Invalid query parameters");
    }
    return apiData;
}

module.exports = {getApiData};