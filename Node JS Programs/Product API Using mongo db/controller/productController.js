let productRepository = require("../repository/productRepository");

exports.findAllProduct = async (req,res)=> {
    let products = await productRepository.findAllProduct();
    res.json(products);
}

exports.storeProduct = async (req,res)=> {
    let product = req.body;     // get data from body part of request 
    try{
    
    let result = await productRepository.storeProduct(product);
        //res.send(result);
        if(result.acknowledged){
            res.send("Record stored successfully...")
        }
    }catch(Ex){
        res.send(Ex);
    }
}

