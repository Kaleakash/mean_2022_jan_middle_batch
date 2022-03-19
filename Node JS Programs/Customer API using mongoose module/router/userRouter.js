let express = require("express");
let router = express.Router();
let userController = require("../controller/userController");

router.post("/register",userController.userRegistration);
router.post("/signIn",userController.signIn);

module.exports=router;