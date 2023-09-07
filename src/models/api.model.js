const dotenv = require('dotenv').config();

const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
const currentUTC = new Date().toISOString().slice(0, 19) + 'Z';

const apiData = {
    slack_name: "",
    current_day: currentDay,
    utc_time: currentUTC,
    track: "backend",
    github_file_url: "https://github.com/Richard-githome/hngx-stage1/tree/main/src",
    github_repo_url: "https://github.com/Richard-githome/hngx-stage1",
    status_code: +"",
};

function getApiData (slack_name, track){
    if (slack_name && track){
        apiData.slack_name = slack_name;
        apiData.track = track;
        apiData.status_code = 200;
    } else if(!slack_name && !track) {
        throw new Error("Invalid query parameters");
    }
    return apiData;
}

module.exports = {getApiData};