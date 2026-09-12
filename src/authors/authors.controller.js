const authorsService = require("./authors.service");

async function insertAuthor(req, res, next) {
    try {
        const {name, nationality} = req.body;
        const doc = await authorsService.insertAuthor(name, nationality);
        
        res.status(201).json(doc);
    } 
    catch (error) {
        next(error);
    }   
}

module.exports = {
    insertAuthor
}