const db = require("../common/db/mongodb");

async function insertAuthor(name, nationality) {
   return await db.collection("authors").insertOne({name: name, 
    nationality: nationality
   });
}

module.exports = {
    insertAuthor
}