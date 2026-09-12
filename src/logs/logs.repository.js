const db = require("../common/db/mongodb");

async function createLogs() {
    return await db.createCollection("logs", {
        capped: true,
        size: 1024 * 1024
    });
}

module.exports = {
    createLogs
}