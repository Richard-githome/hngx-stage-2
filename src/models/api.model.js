const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const apiData = {
    slack_name: "hngx-stage1",
    current_day: days[new Date().getDay()],
    utc_time: new Date().toISOString(),
    track: "backend",
    github_file_url: GITHUB_RUNNING_FILE_URL,
    github_repo_url: GITHUB_REPO_URL,
    status_code: 200,
};

export default apiData;