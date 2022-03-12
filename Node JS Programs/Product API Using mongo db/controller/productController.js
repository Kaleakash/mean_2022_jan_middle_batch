let productRepository = require("../repository/productRepository");

exports.findAllProduct = async (req,res)=> {
    let products = await productRepository.findAllProduct();
    res.json(products);
}

