
// In Controller, methods should only take request, 
// forward and return response.

// Step 1: Import repository
const repo = require("../repositories/book");


exports.getAll = (req, res)=>{
    console.log("Get All books method is called");
    // Call repository to get data.

    repo.getAll((books)=>{
        res.send(books);
    });
}