let productRepository = require("../repository/productRepository");

exports.findAllProduct = async (req,res)=> {
    let products = await productRepository.findAllProduct();
    res.json(products);
}

exports.storeProduct = async (req,res)=> {
    let product = req.body;     // get data from body part of request 
    try{
    let result = await productRepository.storeProduct(product);
        if(result.acknowledged){
            res.send("Record stored successfully...")
        }
    }catch(Ex){
        res.send(Ex);
    }
}

exports.deleteProduct = async (req,res)=> {
    let pid  = req.params._id;
    try {
        let result = await productRepository.deleteProductById(pid);
        if(result.deletedCount>0){
            res.send("Record deleted successfully")
        }else {
            res.send("Record not present")
        }
    }catch(Ex){
        console.log(Ex);
        res.send(Ex);
    }
}
exports.updateProduct = async (req,res)=> {
    let product  = req.body;
    try {
        let result = await productRepository.updateProductPrice(product);
        if(result.modifiedCount>0){
            res.send("Record updated successfully")
        }else if(result.matchedCount>0){
            res.send("Record exist but didn't update")
        }else {
            res.send("Record not present")
        }
    }catch(Ex){
        res.send(Ex);
    }
}
