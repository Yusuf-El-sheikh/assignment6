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

module.exports = {
    createLogs
}