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

//endpoint #12
bookRouter.delete("/books/before-year", booksController.deleteByDate);

//endpoint #13
bookRouter.get("/books/aggregate1", booksController.findByYearSorted);

//endpoint #14
bookRouter.get("/books/aggregate2", booksController.findByYearProjection);

//endpoint #15
bookRouter.get("/books/aggregate3", booksController.unwindGenres);

//endpoint #16
bookRouter.get("/books/aggregate4", booksController.bookLogs);

module.exports = bookRouter;