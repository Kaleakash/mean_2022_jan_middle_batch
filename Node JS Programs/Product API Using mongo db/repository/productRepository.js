let dbCollection = require("../config/dbConfig");

exports.findAllProduct =  ()=> {
    //let product = await dbCollection.getCollection("Product");
    //let res = await product.find({}).toArray();
    //return res;
   return dbCollection.getCollection("Product").find().toArray();
}

