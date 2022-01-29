
// Step 1: Import mongodb config

const db = require("../configs/mongodb");

exports.getAll = (cb)=>{
    const collection = db.getCollection('Book');
    collection.find().toArray()
        .then((books)=>{
            // Calling callback funciton with books
            cb(books);
        })
        .catch(err=>{console.log(err)})
}



function giveBooks(books){
    cb(books);
}