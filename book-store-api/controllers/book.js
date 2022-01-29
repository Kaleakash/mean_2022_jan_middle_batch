
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

exports.storeBook = (req, res)=>{
    console.log("function called to store the book");
    // Call repository to get data.
    let book = req.body;        // get the data from request body
    console.log(book);
    res.send("Done")
}
