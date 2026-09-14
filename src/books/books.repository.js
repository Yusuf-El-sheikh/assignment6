const db = require("../common/db/mongodb");

async function createBooksCollection() {
    return await db.createCollection("books", {
        validator: {
            $jsonSchema: {
                required: ["title"],
                properties: {
                    title: {
                        bsonType: "string",
                        minLength: 1
                    }
                }
            }
        }
    });
}

async function createIndex() {
    return await db.collection("books").createIndex({ title: 1 });
};

async function insertBook(title, author, year, genres) {
    return await db.collection("books").insertOne({ title: title, author: author, year: year, genres: genres });
}

async function insertManyBooks(books) {
    return await db.collection("books").insertMany(books);
}

async function updateBookByTitle(title, updatedInfo) {
    return await db.collection("books").updateOne({ title: title }, { $set: updatedInfo })
}

async function findBookByTitle(title) {
    return await db.collection("books").findOne({ title: title });
}

async function findBookByYear(from, to) {
    return await db.collection("books").find({ year: { $gte: from, $lte: to } }).toArray();
}

async function findBookByGenre(genre) {
    return await db.collection("books").find({ genres: genre }).toArray();
}

async function getBooksPaginated() {
    return await db.collection("books").find().skip(2).limit(3).sort({ year: -1 }).toArray();
}

async function findIntegerYears() {
    return await db.collection("books").find({ year: { $type: "int" } }).toArray();
}

async function excludeGenres() {
    return await db.collection("books").find({ $and: [{ genres: { $neq: "Horror" } }, { genres: { $neq: "Science Fiction" } }] });
}

async function deleteByDate() {
    return await db.collection("books").deleteMany({year: {$lt: 2000}});
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
    deleteByDate
}