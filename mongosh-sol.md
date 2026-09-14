### assignment 6 sol in mongo shell

```js
*Q1*

db.createCollection("books", {
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

*Q2*

db.authors.insertOne({name: "Author1", nationality: "british"});

*Q3*

db.createCollection("logs", {
    capped: true,
    size: 1024*1024
});

*Q4*

db.books.createIndex({title: 1});

*Q5*

db.books.insertOne({title: "title", author: "author", year: "year", genres: "genres"});

*Q6*

db.books.insertMany([
    {title: "title1", author: "author1", year: "year1", genres: "genres1"},
    {title: "title2", author: "author2", year: "year2", genres: "genres2"},
    {title: "title3", author: "author3", year: "year3", genres: "genres3"}
]);

*Q7*

db.logs.insertOne({bookId: "id", action: "action"});

*Q8*

db.books.updateOne({title : "Future"}, {$set:{year: 2022}});

*Q9*

db.books.findOne({title: "title"});

*Q10*

db.books.find({year:{ $gte: 1999, $lte: 2010}});

*Q11*

db.books.find({genres: "genre"});

*Q12*

db.books.find().skip(2).limit(3).sort({year: -1});

*Q13*

db.books.find({year: {$type: "int"}});

*Q14*

db.books.find({$and: [ {genres: {$ne: "Horror"}}, {genres: {$ne: "Science Fiction"}} ]});

*Q15*

db.books.deleteMany({year: {$lt: 2000}});

*Q16*

db.books.aggregate([
    {$match: {year: {$gt: 2000}}},
    {$sort: {year: -1}}
]);

*Q17*

db.books.aggregate([
    {$match: {year: {$gt: 2000}}},
    {$sort: {year: -1}},
    {$project: {title: 1, author: 1, year: 1, _id: 0}}
]);

*Q18*

db.books.aggregate([
    { $unwind: "$genres"},
    { $project: {title: 1, genres: 1, _id: 0}}
]);
```
