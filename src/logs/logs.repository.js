const db = require("../common/db/mongodb");
const { ObjectId } = require("mongodb");

async function createLogs() {
    return await db.createCollection("logs", {
        capped: true,
        size: 1024 * 1024
    });
}

async function insertLog(bookId, action) {
    return await db.collection("logs").insertOne({ bookId: new ObjectId(bookId), action: action });
}
module.exports = {
    createLogs,
    insertLog,
    
}