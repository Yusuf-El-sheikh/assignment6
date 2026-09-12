const booksController = require("./books.controller");

const {Router} = require("express");
const bookRouter = new Router();

//endpoint #1
bookRouter.post("/books", booksController.createBooksCollection);


module.exports = bookRouter;