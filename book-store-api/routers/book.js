
// Step 1: Import Express
const express = require("express");
const controller = require("../controllers/book");

// Step 2: Create Router
const router = express.Router();

// Step 3: Configure Paths
// get method is use to retrieve resources ie customer or books. 
router.get('/getAllBooks', controller.getAll);
// Post method to store resources may be book or customer or employee 
router.post("/storeBook", controller.storeBook)

module.exports = router;
