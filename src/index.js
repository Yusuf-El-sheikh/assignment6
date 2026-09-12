const bookRouter = require("./books/books.router")
const authorsRouter = require("./authors/authors.router")
const logsRouter = require("./logs/logs.router")
const express = require("express");

const app = express();
app.use(express.json());

app.use("/collection", bookRouter);
app.use("/collection", authorsRouter);
app.use("/collection", logsRouter);

app.listen(3000, ()=>
{
    console.log("running on port: 3000\n\nhttp://localhost:3000");
});