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

module.exports = {
    createBooksCollection
}