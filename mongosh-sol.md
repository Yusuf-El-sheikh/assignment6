### assignment 6 sol in mongo shell

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