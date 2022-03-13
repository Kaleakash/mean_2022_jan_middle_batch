let express = require("express");
let router = express.Router();
let customerController = require("../controller/customerController");

router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
router.put("/updateCustomerAge",customerController.updateCustomerAge);
router.delete("/deleteCustomerInfo/:_id",customerController.deleteCustomerInfo);
router.get("/findAllCustomer",customerController.findAllCustomer);
module.exports=router;