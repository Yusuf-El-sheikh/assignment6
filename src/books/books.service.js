const booksRepository = require("./books.repository");

async function createBooksCollection() {
    return await booksRepository.createBooksCollection();
}

async function createIndex() {
    return await booksRepository.createIndex();
}

async function insertBook(title, author, year, genres) {
    if (!title || !author || !year || !genres) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.insertBook(title, author, year, genres);
}

async function insertManyBooks(books) {
    if (books.length === 0) {
        const error = new Error("Invalid action: books array is empty.");
        error.status = 400;
        throw error;
    }

    for (const book of books) {

        if (!book) {
            const error = new Error("Invalid action: empty books can't be inserted.");
            error.status = 400;
            throw error;
        }

        const { title, author, year, genres } = book;

        if (!title || !author || !year || !genres) {
            const error = new Error("Invalid action: missing required data.");
            error.status = 400;
            throw error;
        }
    }

    return await booksRepository.insertManyBooks(books);

}

async function updateBookByTitle(title, updatedInfo) {
    if (!title || !updatedInfo) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.updateBookByTitle(title, updatedInfo);
}

async function findBookByTitle(title) {
    if (!title) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.findBookByTitle(title);
}

async function findBookByYear(from, to) {
    if (!from || !to) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    if (from < 0 || to < 0) {
        const error = new Error("Invalid action: provided years must be positive.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.findBookByYear(from, to);
}

async function findBookByGenre(genre) {
    if (!genre) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.findBookByGenre(genre);
}

async function getBooksPaginated() {
    return await booksRepository.getBooksPaginated();
}

async function findIntegerYears() {
    return await booksRepository.findIntegerYears();
}

async function excludeGenres() {
    return await booksRepository.excludeGenres();
}

async function deleteByDate(date) {
    if (!date) {
        const error = new Error("Invalid action: missing required data.");
        error.status = 400;
        throw error;
    }

    return await booksRepository.deleteByDate(date);
}

async function findByYearSorted() {
    return await booksRepository.findByYearSorted();
}

async function findByYearProjection() {
    return await booksRepository.findByYearProjection();
}

async function unwindGenres() {
    return await booksRepository.unwindGenres();
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