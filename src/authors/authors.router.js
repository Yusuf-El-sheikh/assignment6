const authorsController = require("./authors.controller");

const {Router} = require("express");
const authorsRouter = new Router();

//endpoint #1
authorsRouter.post("/authors", authorsController.insertAuthor);

module.exports = authorsRouter;