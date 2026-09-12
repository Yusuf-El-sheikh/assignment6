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

module.exports = { 
    createBooksCollection
}