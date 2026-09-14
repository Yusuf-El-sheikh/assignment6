const booksService = require("./books.service");

async function createBooksCollection(req, res, next) {
    try {
        const doc = await booksService.createBooksCollection();
        res.status(201).json({ ok: 1 });
    }
    catch (error) {
        next(error);
    }
}

async function createIndex(req, res, next) {
    try {
        const doc = await booksService.createIndex();
        res.status(201).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function insertBook(req, res, next) {
    try {
        const { title, author, year, genres } = req.body;

        const doc = await booksService.insertBook(title, author, year, genres);
        res.status(201).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function insertManyBooks(req, res, next) {
    try {
        const books = req.body;
        const doc = await booksService.insertManyBooks(books);
        res.status(201).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function updateBookByTitle(req, res, next) {
    try {
        const title = req.params.title;
        const updatedInfo = req.body;
        const doc = await booksService.updateBookByTitle(title, updatedInfo);
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function findBookByTitle(req, res, next) {
    try {
        const title = req.query.title;
        const doc = await booksService.findBookByTitle(title);
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function findBookByYear(req, res, next) {
    try {
        const from = parseInt(req.query.from);
        const to = parseInt(req.query.to);

        const doc = await booksService.findBookByYear(from, to);
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function findBookByGenre(req, res, next) {
    try {
        const genre = req.query.genre;

        const doc = await booksService.findBookByGenre(genre);
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function getBooksPaginated(req, res, next) {
    try {
        const doc = await booksService.getBooksPaginated();
        res.status(200).json(doc)
    }
    catch (error) {
        next(error);
    }
}

async function findIntegerYears(req, res, next) {
    try {
        const doc = await booksService.findIntegerYears();
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function excludeGenres(req, res, next) {
    try {
        const doc = await booksService.excludeGenres();
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function deleteByDate(req, res, next) {
    try {
        const date = parseInt(req.query.year)
        const doc = await booksService.deleteByDate(date);
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function findByYearSorted(req, res, next) {
    try {
        const doc = await booksService.findByYearSorted();
        res.status(200).json(doc);
    }
    catch (error) {
        next(error);
    }
}

async function findByYearProjection(req, res, next) {
    try {
        const doc = await booksService.findByYearProjection();
        res.status(200).json(doc);
    } catch (error) {
        next(error);
    }
}

async function unwindGenres(req, res, next) {
    try {
        const doc = await booksService.unwindGenres();
        res.status(200).json(doc);
    } 
    catch (error) {
        next(error);    
    }
}

module.exports = {
    createBooksCollection,
    createIndex,
    insertBook,
    insertManyBooks,
    updateBookByTitle,
    findBookByTitle,
    findBookByYear,
    findBookByGenre,
    getBooksPaginated,
    findIntegerYears,
    excludeGenres,
    deleteByDate,
    findByYearSorted,
    findByYearProjection,
    unwindGenres
}