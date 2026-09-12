const authorsRepository = require("./authors.repository");

async function insertAuthor(name, nationality) {
    if (!name) {
        const error = new Error("Invalid action: author name can't be empty.");
        error.status = 400;
        throw error;
    }

    if (!nationality) {
        const error = new Error("Invalid action: nationality can't be empty.");
        error.status = 400;
        throw error;
    }

    return await authorsRepository.insertAuthor(name, nationality);
}

module.exports = {
    insertAuthor
}