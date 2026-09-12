const logsRepository = require("./logs.repository");

async function createLogs() {
    return await logsRepository.createLogs();
}

module.exports = {
    createLogs
}