let dbCollection = require("../config/dbConfig");

exports.findAllProduct =  ()=> {
    //let product = await dbCollection.getCollection("Product");
    //let res = await product.find({}).toArray();
    //return res;
   return dbCollection.getCollection("Product").find().toArray();
}

exports.storeProduct = (product)=> {
    return dbCollection.getCollection("Product").insertOne(product);
}

exports.deleteProductById = (pid)=> {
    let tempId = eval(pid);
    return dbCollection.getCollection("Product").deleteOne({_id:tempId});
}

exports.updateProductPrice = (product)=> {
    return dbCollection.getCollection("Product").updateOne({_id:product._id},{$set:{price:product.price}});
}