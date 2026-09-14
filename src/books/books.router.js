const booksController = require("./books.controller");

const {Router} = require("express");
const bookRouter = new Router();

//endpoint #1
bookRouter.post("/books", booksController.createBooksCollection);

//endpoint #2
bookRouter.post("/books/index", booksController.createIndex);

//endpoint #3
bookRouter.post("/insert-book", booksController.insertBook);

//endpoint #4
bookRouter.post("/insert-many-books", booksController.insertManyBooks);

//endpoint #5
bookRouter.patch("/books/:title", booksController.updateBookByTitle);

//endpoint #6
bookRouter.get("/books/title", booksController.findBookByTitle);

//endpoint #7
bookRouter.get("/books/year", booksController.findBookByYear);

//endpoint #8
bookRouter.get("/books/genre", booksController.findBookByGenre);

//endpoint #9 
bookRouter.get("/books/skip-limit", booksController.getBooksPaginated);

//endpoint #10
bookRouter.get("/books/year-integer", booksController.findIntegerYears);

//endpoint #11
bookRouter.get("/books/exclude-genres", booksController.excludeGenres);

module.exports = bookRouter;