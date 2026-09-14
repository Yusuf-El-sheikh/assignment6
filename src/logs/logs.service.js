const logsRepository = require("./logs.repository");

async function createLogs() {
    return await logsRepository.createLogs();
}

async function insertLog(bookId, action) {
    if(!bookId || !action)
    {
        const error = new Error("Invalid action: missing required id or action data.");
        error.status = 400;
        throw error;
    }
    
    return await logsRepository.insertLog(bookId, action);
}
module.exports = {
    createLogs,
    insertLog,
    
}