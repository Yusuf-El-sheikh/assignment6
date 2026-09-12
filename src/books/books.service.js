const booksRepository = require("./books.repository");

async function createBooksCollection() {
    return await booksRepository.createBooksCollection();
}

module.exports = {
    createBooksCollection
}