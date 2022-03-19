let express = require("express");
let router = express.Router();
let customerController = require("../controller/customerController");
let auth = require("../middleware/auth");
// router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
// router.put("/updateCustomerAge",customerController.updateCustomerAge);
// router.delete("/deleteCustomerInfo/:_id",customerController.deleteCustomerInfo);
// router.get("/findAllCustomer",customerController.findAllCustomer);

// Normal User can do only one operation
router.get("/findAllCustomer",auth.verifyToken,auth.isUser,customerController.findAllCustomer);

// Admin user can do two operation ie store and retrieve 
router.get("/findAllCustomer",auth.verifyToken,auth.isAdmin,customerController.findAllCustomer);
router.post("/storeCustomerInfo",auth.verifyToken,auth.isAdmin,customerController.storeCustomerInfo);

module.exports=router;