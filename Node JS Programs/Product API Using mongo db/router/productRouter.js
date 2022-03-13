let express = require("express");
let router = express.Router();      // it is to create the router refeference. 
let productController = require("../controller/productController");

router.get("/findProduct",productController.findAllProduct);
router.post("/storeProduct",productController.storeProduct);
router.delete("/deleteProduct/:_id",productController.deleteProduct)
router.put("/updateProduct",productController.updateProduct);

module.exports=router;