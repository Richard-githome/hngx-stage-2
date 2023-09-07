const dotenv = require('dotenv').config();

const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
const date = new Date();
const year = date.getUTCFullYear();
const month = String(date.getUTCMonth() + 1).padStart(2, '0');
const day = String(date.getUTCDate()).padStart(2, '0');
const hours = String(date.getUTCHours()).padStart(2, '0');
const minutes = String(date.getUTCMinutes()).padStart(2, '0');
const seconds = String(date.getUTCSeconds()).padStart(2, '0');


const apiData = {
    slack_name: "",
    current_day: currentDay,
    utc_time: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`,
    track: "backend",
    github_file_url: "https://github.com/Richard-githome/hngx-stage1/blob/main/src/server.js",
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