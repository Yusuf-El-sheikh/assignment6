const logsController = require("./logs.controller");

const {Router} = require("express");
const logsRouter = new Router();

logsRouter.post("/logs/capped", logsController.createLogs);

module.exports = logsRouter;