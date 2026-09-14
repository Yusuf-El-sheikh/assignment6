const logsService = require("./logs.service");

async function createLogs(req, res, next) {
    try {
        const doc = await logsService.createLogs();
        res.status(201).json({ok: 1});     
    } 
    catch (error) {
        next(error);    
    }
}

async function insertLog(req, res, next) {
    try {
        const {bookId, action} = req.body;
        const doc = await logsService.insertLog(bookId, action)
        res.status(201).json(doc);
    }
    catch (error) {
        next(error);    
    }
}

module.exports = {
    createLogs,
    insertLog
}