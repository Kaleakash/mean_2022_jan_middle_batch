let express = require("express");
let router = express.Router();
let customerController = require("../controller/customerController");

router.post("/storeCustomerInfo",customerController.storeCustomerInfo);



module.exports=router;