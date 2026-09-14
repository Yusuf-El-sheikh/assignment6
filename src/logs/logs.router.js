const logsController = require("./logs.controller");

const {Router} = require("express");
const logsRouter = new Router();

//endpoint #1
logsRouter.post("/logs/capped", logsController.createLogs);

//endpoint #2
logsRouter.post("/logs", logsController.insertLog);
module.exports = logsRouter;